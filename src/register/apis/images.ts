import {ImagePickerResponse} from 'react-native-image-picker';
import instance from '../../common/apis/axiosInstance';
import IMGSTATUS from '../constatnts/IMGSTATUS';
import axios from 'axios';

const getBlob = async (fileUri: string) => {
  const resp = await fetch(fileUri);
  const imageBody = await resp.blob();
  return imageBody;
};

export const submitImage = async (
  res: ImagePickerResponse | null,
  url: string,
) => {
  if (!res) {
    return;
  }
  const file = {
    name: res.assets?.[0]?.fileName,
    type: res.assets?.[0]?.type,
    uri: res.assets?.[0]?.uri,
  };

  // Blob 객체 생성
  const blob = await getBlob(file.uri!);

  // const formData = new FormData();
  // formData.append('file', file);

  try {
    // 서버로 이미지 업로드
    const response = await axios.put(url, blob);
    console.log('🔥 업로드 응답:', response);

    // 파일 이름 추출
    const fileName = url.match(/\/([^\/?]+)(?=\.png)/);

    // 성공적으로 업로드 후 S3 알림
    await uploadImageToS3(fileName?.[1], IMGSTATUS.success);
  } catch (error) {
    console.error('업로드 실패:', error);

    // 실패 시 S3 알림
    await uploadImageToS3('', IMGSTATUS.fail);
  }
};

const uploadImageToS3 = async (file: string | undefined, status: string) => {
  if (!file) {
    return;
  }
  console.log('업로드 시도', file);
  try {
    // S3 업로드 상태 알림
    await instance.post('api/member/images/notify', {
      filename: file, // `filename`에서 오타 수정
      status: status,
    });
    console.log(file, '이미지 업로드 성공');
  } catch (error) {
    console.error('이미지 업로드 실패:', error);
  }
};
