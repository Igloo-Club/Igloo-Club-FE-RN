import React, {useState, useEffect} from 'react';
import styled from '@emotion/native';
import {Text} from 'react-native';
import instance from '../common/apis/axiosInstance';
import {ProfileDataTypesProps} from '../common/types/ProfileDataTypesProps';

const MyPage = () => {
  const [myProfile, setMyProfile] = useState<ProfileDataTypesProps>();

  useEffect(() => {
    handleMyData();
  }, []);

  const handleMyData = async () => {
    try {
      const res = await instance.get('/api/member');
      console.log(res.data);
      setMyProfile(res.data);
    } catch (err) {
      console.log('handleMyData 에러 : ', err);
    }
  };
  return (
    <Container>
      <Profile>
        <Text>{myProfile?.nickname}</Text>
      </Profile>
    </Container>
  );
};

export default MyPage;

const Container = styled.SafeAreaView`
  flex-direction: column;
  align-items: center;
`;

const Profile = styled.View`
  padding: 25px 20px 0px 20px;
`;
