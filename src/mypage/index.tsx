import React, {useState, useEffect} from 'react';
import styled from '@emotion/native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import instance from '../common/apis/axiosInstance';
import {memberType} from './constants';
import {
  IcBell,
  IcEdit,
  IcFace,
  IcPaper,
  IcQuestion,
  IcSafeLock,
} from './assets/0_index';
import {navigate} from '../common/hooks/useNavigationRef';

const MyPage = () => {
  const [myProfile, setMyProfile] = useState<memberType | null>(null);

  useEffect(() => {
    handleMyData();
  }, []);

  const handleMyData = async () => {
    try {
      const res = await instance.get('/api/member');
      setMyProfile(res.data);
    } catch (err) {
      console.log('handleMyData 에러 : ', err);
    }
  };
  return myProfile ? (
    <Container>
      <StProfile.container>
        <StProfile.imageContainer>
          <StProfile.imageWrapper>
            <StProfile.image source={{uri: myProfile.imageUrlList[0]}} />
          </StProfile.imageWrapper>
          <StProfile.editContainer>
            <IcEdit />
          </StProfile.editContainer>
        </StProfile.imageContainer>
        <StProfile.nickname>{myProfile.nickname}</StProfile.nickname>
        <StProfile.email>{myProfile.email}</StProfile.email>
      </StProfile.container>
      <StListItem.contaienr>
        <IcSafeLock />
        <StListItem.text>아는사람 만나지 않기</StListItem.text>
      </StListItem.contaienr>
      <StLine />
      <StListItem.contaienr>
        <IcFace />
        <StListItem.text onPress={() => navigate('IdealType')}>
          이상형 수정
        </StListItem.text>
      </StListItem.contaienr>
      <StLine />
      <StEtcList>
        <StListItem.contaienr>
          <IcBell />
          <StListItem.text>푸시 메세지 설정</StListItem.text>
        </StListItem.contaienr>
        <StListItem.contaienr>
          <IcPaper />
          <StListItem.text>이용 약관</StListItem.text>
        </StListItem.contaienr>
        <StListItem.contaienr>
          <IcQuestion />
          <StListItem.text>개발자에게 문의하기</StListItem.text>
        </StListItem.contaienr>
      </StEtcList>
    </Container>
  ) : (
    <></>
  );
};

export default MyPage;

const Container = styled.SafeAreaView`
  flex-direction: column;
  align-items: center;

  padding: 25px 20px 0px 20px;
`;

const StProfile = {
  container: styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 60px 0;
  `,
  imageContainer: styled(View)`
    width: 110px;
    height: 110px;
    position: relative;
  `,
  imageWrapper: styled(TouchableOpacity)`
    width: 105px;
    height: 105px;
    border-radius: 100px;
    overflow: hidden;
    background-color: #ccc;
  `,
  image: styled(Image)`
    width: 100%;
    height: 100%;
  `,
  nickname: styled(Text)`
    color: #303030;
    text-align: center;
    font-size: 22px;
    font-weight: 600;
  `,
  email: styled(Text)`
    color: #5f5f5f;
    text-align: center;
    font-size: 13px;
    font-weight: 400;
  `,
  editContainer: styled(View)`
    width: 42px;
    height: 42px;
    border-radius: 100px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    & path {
      stroke: #878e9c;
    }
  `,
};

const StListItem = {
  contaienr: styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 9px;
    padding: 20px 0;
  `,
  text: styled(Text)`
    color: #303030;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
  `,
};

const StEtcList = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StLine = styled(View)`
  width: 100%;
  height: 1px;
  background-color: #ecebf1;
`;
