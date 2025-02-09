import React, {useEffect, useState} from 'react';

import RegisterLayout from '../components/RegisterLayout';
import {RegisterstepType} from '../types/registerFunnelType';
import CustomTextInput from '../components/TextInput';
import instance from '../../common/apis/axiosInstance';
import {Text, TouchableOpacity, View} from 'react-native';

import styled from '@emotion/native';

const CompanyFunnel = ({
  onPrev,
  onNext,
  email,
}: {
  onNext: () => void;
  onPrev: () => void;
  email: string;
}) => {
  const [company, setCompany] = useState('');
  const [companyNameList, setCompanyNameList] = useState([]);

  useEffect(() => {
    const getCompany = async () => {
      try {
        const {data: companyData} = await instance.get(
          `api/company?email=${email}`,
        );
        setCompanyNameList(companyData.companyNameList);
      } catch (err) {
        console.log(err);
      }
    };
    getCompany();
  }, [email]);

  const submitCompany = async () => {
    try {
      await instance.post('api/company', {
        email: email,
        companyName: company,
      });
      onNext();
    } catch (err) {
      console.log(err);
    }
  };

  const selectCompanyName = (companyName: string) => {
    setCompany(companyName);
  };

  return (
    <RegisterLayout
      step={RegisterstepType[7]}
      onBackPress={onPrev}
      onButtonPress={submitCompany}
      isBtnActive={company.length > 0}>
      <View>
        <CustomTextInput
          label="회사명"
          placeholder="회사명 입력"
          value={company}
          onChangeText={setCompany}
          keyboardType="default"
        />
      </View>
      <StNameListContaienr>
        {companyNameList.map(item => {
          return (
            <StItem
              onPress={() => selectCompanyName(item)}
              isSeleted={company === item}>
              <StItemText isSeleted={company === item}>{item}</StItemText>
            </StItem>
          );
        })}
      </StNameListContaienr>
    </RegisterLayout>
  );
};

export default CompanyFunnel;

const StNameListContaienr = styled(View)`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const StItem = styled(TouchableOpacity)<{isSeleted: boolean}>`
  width: fit-content;
  padding: 10px 15px;
  background-color: ${({isSeleted}) =>
    isSeleted ? 'rgba(250, 114, 104, 0.2)' : '#fafafb'};
  border-radius: 20px;
`;

const StItemText = styled(Text)<{isSeleted: boolean}>`
  color: ${({isSeleted}) => (isSeleted ? '#FA7268' : '#9FA4B0')};
`;
