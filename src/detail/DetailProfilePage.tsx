// import React from 'react';
// import useFunnel from './hooks/useFunnel';
// // import {View} from 'react-native';
// // import styled from '@emotion/native';

// import {
//   키입력,
//   종교여부,
//   문신여부,
//   흡연여부,
//   결혼예정여부,
//   엠비티아이,
//   세전연봉,
//   근무형태,
//   회사규모,
//   취미,
//   한줄소개,
//   자기소개,
// } from './funnelPages/0_index';

// const stepType = [
//   '키입력',
//   '종교여부',
//   '문신여부',
//   '흡연여부',
//   '결혼예정여부',
//   '엠비티아이',
//   '세전연봉',
//   '근무형태',
//   '회사규모',
//   '취미',
//   '한줄소개',
//   '자기소개',
// ] as const;

// const DetailProfile = ({navigation}: any) => {
//   const [Funnel, setStep] = useFunnel(stepType, '키입력');

//   return (
//     <Funnel>
//       <Funnel.Step name="키입력">
//         <키입력 onNext={() => setStep('종교여부')} navigation={navigation} />
//       </Funnel.Step>
//       <Funnel.Step name="종교여부">
//         <종교여부 onNext={() => setStep('문신여부')} navigation={navigation} />
//       </Funnel.Step>
//       <Funnel.Step name="문신여부">
//         <문신여부 onNext={() => setStep('흡연여부')} />
//       </Funnel.Step>
//       <Funnel.Step name="흡연여부">
//         <흡연여부 onNext={() => setStep('결혼예정여부')} />
//       </Funnel.Step>
//       <Funnel.Step name="결혼예정여부">
//         <결혼예정여부 onNext={() => setStep('엠비티아이')} />
//       </Funnel.Step>
//       <Funnel.Step name="엠비티아이">
//         <엠비티아이 onNext={() => setStep('세전연봉')} />
//       </Funnel.Step>
//       <Funnel.Step name="세전연봉">
//         <세전연봉 onNext={() => setStep('근무형태')} />
//       </Funnel.Step>
//       <Funnel.Step name="근무형태">
//         <근무형태 onNext={() => setStep('회사규모')} />
//       </Funnel.Step>
//       <Funnel.Step name="회사규모">
//         <회사규모 onNext={() => setStep('취미')} />
//       </Funnel.Step>
//       <Funnel.Step name="취미">
//         <취미 onNext={() => setStep('한줄소개')} />
//       </Funnel.Step>
//       <Funnel.Step name="한줄소개">
//         <한줄소개 onNext={() => setStep('자기소개')} />
//       </Funnel.Step>
//       <Funnel.Step name="자기소개">
//         <자기소개 onNext={() => navigation.navigate('/main-page')} />
//       </Funnel.Step>
//     </Funnel>
//   );
// };

// export default DetailProfile;

// // const Container = styled(View)`
// //   padding: 16px;
// //   background-color: #ffffff;
// // `;

import React, {useState} from 'react';
import styled from '@emotion/native';
import {View, TouchableOpacity} from 'react-native';
import DetailProfileHeader from './components/DetailProfileHeader';
import {
  DETAIL_PROFILE_VIEW_CONSTATNS,
  HOBBY,
} from './constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import FooterBtn from './components/DetailProfileFooter';

const DetailProfile = ({navigation}: any) => {
  const [step, setStep] = useState(0);
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    [],
  );
  const [activeHobby, setActiveHobby] = useState<string | null>(null);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const selectHobby = (hobbyValue: string) => {
    if (selectedHobbies.includes(hobbyValue)) {
      setSelectedHobbies(selectedHobbies.filter(item => item !== hobbyValue));
      setActiveHobby(null);
    } else if (selectedHobbies.length < 5) {
      setSelectedHobbies([...selectedHobbies, hobbyValue]);

      // PET 제외한 나머지 항목 누르면 활성화
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
    <Container>
      <DetailProfileHeader percent={8} navigation={navigation} />
      <Title>{DETAIL_PROFILE_VIEW_CONSTATNS[step].mainTitle}</Title>
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
    </Container>
  );
};

export default DetailProfile;

const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: #ffffff;
`;

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
  background-color: ${({selected}) => (selected ? '#FA7268' : '#FFF')};
  border-radius: 20px;
  padding: 10px 15px;
  margin: 6px 5px;
  align-items: center;
  justify-content: center;
`;

const HobbyLabel = styled.Text<{selected: boolean}>`
  font-size: 15px;
  font-weight: ${({selected}) => (selected ? '600' : '400')};
  color: ${({selected}) => (selected ? '#FFF' : '#000')};
`;

const SubCategoryList = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1px;
  padding-left: 1px;
`;

const SubCategoryItem = styled(TouchableOpacity)<{selected: boolean}>`
  border: none;
  background-color: ${({selected}) =>
    selected ? 'rgba(250, 114, 104, 0.20)' : '#FAFAFB'};
  border-radius: 20px;
  padding: 8px 12px;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;

const SubCategoryLabel = styled.Text<{selected: boolean}>`
  font-size: 13px;
  font-weight: ${({selected}) => (selected ? '600' : '500')};
  color: ${({selected}) => (selected ? '#FA7268' : '#9FA4B0')};
`;
