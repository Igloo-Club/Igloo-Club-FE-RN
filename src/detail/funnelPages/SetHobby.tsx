import React, {useState} from 'react';
import styled from '@emotion/native';
import {View, TouchableOpacity} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {
  DETAIL_PROFILE_VIEW_CONSTATNS,
  HOBBY,
} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';
import {NavTypesProps} from '../types/navTypes';

const 취미 = ({
  onNext,
  step,
  setStep,
  navigation,
}: NavTypesProps & {
  step: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    [],
  );
  const [activeHobby, setActiveHobby] = useState<string | null>(null);

  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
    onNext();
  };

  const selectHobby = (hobbyValue: string) => {
    if (selectedHobbies.includes(hobbyValue)) {
      setSelectedHobbies(selectedHobbies.filter(item => item !== hobbyValue));
      setActiveHobby(null);
    } else if (selectedHobbies.length < 5) {
      setSelectedHobbies([...selectedHobbies, hobbyValue]);

      // PET 제외 항목 선택 시 활성화
      const hobby = HOBBY.find(item => item.value === hobbyValue);
      if (hobby?.subCategories.length) {
        setActiveHobby(hobbyValue);
      }
    }
  };

  const selectSubCategory = (subCategoryValue: string) => {
    if (selectedSubCategories.includes(subCategoryValue)) {
      setSelectedSubCategories(
        selectedSubCategories.filter(item => item !== subCategoryValue),
      );
    } else {
      setSelectedSubCategories([...selectedSubCategories, subCategoryValue]);
    }
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={80} navigation={navigation} />
      <Title>
        {
          DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step)
            ?.mainTitle
        }{' '}
      </Title>
      <SubTitle>최대 5개까지 선택 가능해요.</SubTitle>
      <CheckWrapper>
        <HobbyList>
          {HOBBY.map(item => (
            <View key={item.value}>
              <HobbyItem
                selected={selectedHobbies.includes(item.value)}
                onPress={() => selectHobby(item.value)}>
                <HobbyLabel selected={selectedHobbies.includes(item.value)}>
                  {item.label}
                </HobbyLabel>
              </HobbyItem>

              {/* 세부 카테고리 렌더링 */}
              {activeHobby === item.value && item.subCategories.length > 0 && (
                <SubCategoryList>
                  {item.subCategories.map(subItem => (
                    <SubCategoryItem
                      key={subItem.value}
                      selected={selectedSubCategories.includes(subItem.value)}
                      onPress={() => selectSubCategory(subItem.value)}>
                      <SubCategoryLabel
                        selected={selectedSubCategories.includes(
                          subItem.value,
                        )}>
                        {subItem.label}
                      </SubCategoryLabel>
                    </SubCategoryItem>
                  ))}
                </SubCategoryList>
              )}
            </View>
          ))}
        </HobbyList>
      </CheckWrapper>
      <FooterBtn
        onPress={handleNextStep}
        isDisabled={!selectedHobbies.length}
        label="다음으로"
      />
    </View>
  );
};

export default 취미;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 0px 0px 10px 5px;
  line-height: 35px;
`;

const SubTitle = styled.Text`
  color: #646d7a;
  font-size: 14px;
  font-weight: 500;
  margin: 0px 0px 10px 5px;
`;

const CheckWrapper = styled(View)`
  margin-top: 10px;
`;

const HobbyList = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const HobbyItem = styled(TouchableOpacity)<{selected: boolean}>`
  border: ${({selected}) =>
    selected ? '1.5px solid #FA7268' : '1px solid #E5E8ED'};
  background-color: ${({selected}) => (selected ? '#FA7268' : 'white')};
  border-radius: 20px;
  padding: 10px 15px;
  margin: 6px 5px;
  align-items: center;
  justify-content: center;
`;

const HobbyLabel = styled.Text<{selected: boolean}>`
  font-size: 15px;
  font-weight: ${({selected}) => (selected ? '600' : '400')};
  color: ${({selected}) => (selected ? 'white' : '#000')};
`;

const SubCategoryList = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
`;

const SubCategoryItem = styled(TouchableOpacity)<{selected: boolean}>`
  background-color: ${({selected}) =>
    selected ? 'rgba(250, 114, 104, 0.20)' : '#FAFAFB'};
  border-radius: 20px;
  padding: 8px 12px;
  margin: 4px;
  align-items: center;
  justify-content: center;
`;

const SubCategoryLabel = styled.Text<{selected: boolean}>`
  font-size: 13px;
  font-weight: ${({selected}) => (selected ? '600' : '500')};
  color: ${({selected}) => (selected ? '#FA7268' : '#9FA4B0')};
`;
