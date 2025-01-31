import styled from '@emotion/native';
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FooterBtn from '../common/components/FooterBtn';
import {IDEAL_KEY, IDEAL_LIST} from './constants/IDEAL_LIST';
import ListContainer from './components/ListContainer';
import {formatIdealListValueText} from './utils/formatIdealListValueText';
import {MOCK_IDEAL} from './constants/MOCK_IDEALTYPE';
import IdealTypeModal from './components/IdealTypeModal';
import instance from '../common/apis/axiosInstance';
import {IidealType} from './types/idealType';
// import instance from '../common/apis/axiosInstance';

const IdealType = ({navigation}: any) => {
  const [data, setData] = useState<IidealType | undefined>(MOCK_IDEAL);
  const [isModalOpen, setIsModalOpen] = useState<
    keyof typeof IDEAL_KEY | null
  >();

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const result = await instance.get('/api/member/ideal');
      console.log(result.data);
      setData(result.data);
    } catch (err) {
      console.log('getIdeal', err);
    }
  };

  const handleData = (
    key: string,
    value: string | number | string[] | boolean,
  ) => {
    setData(prevData => ({
      ...prevData,
      [key]: value,
    }));
  };

  const submitData = async () => {
    try {
      console.log(data);
      await instance.post('api/member/ideal', data);
      console.log('success post ideal');
    } catch {}
  };
  return (
    <View>
      <Container>
        <Header>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}>
            <Text>&lt;</Text>
          </BackButton>
          <Title>선호 이성 설정</Title>
        </Header>
        <StNotice>
          회원님의 선호에 최대한 가까운 사람들을 추천해드려요. 지나치게
          한정적으로 설정 시 원활한 추천 및 매칭이 되지 않을 수 있어요.
        </StNotice>
        {IDEAL_LIST.map(item => {
          const content = formatIdealListValueText(item.label, data);
          return (
            <ListContainer
              key={item.label}
              label={item.label}
              content={content}
              onModal={() => {
                setIsModalOpen(item.key);
              }}
            />
          );
        })}
        <FooterBtn
          onPress={submitData}
          isDisabled={data === MOCK_IDEAL}
          label="적용하기"
        />
      </Container>
      {isModalOpen && (
        <IdealTypeModal
          modalKey={isModalOpen}
          onClose={() => {
            setIsModalOpen(null);
          }}
          handleData={handleData}
          data={data}
        />
      )}
    </View>
  );
};

export default IdealType;

const Container = styled(SafeAreaView)`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 25px 20px 56px 20px;
`;

const Header = styled(View)`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.colors.gray9};
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.3px;
`;

const StNotice = styled.Text`
  width: 100%;
  height: fit-content;
  background-color: #fafafa;
  color: #969696;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.3px;
  margin: 9px 0px;
`;
