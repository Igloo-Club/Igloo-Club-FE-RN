import React, {useState, useEffect} from 'react';
import styled from '@emotion/native';
import {View, TouchableOpacity} from 'react-native';
import {HOBBY} from '../constants/DETAIL_PROFILE_SELECTS';
import {detailProfileFunnelProps} from '../types/detailProfileFunnelTypes';
import DetailLayout from '../components/DetailProfileLayout';

const 취미 = ({
  onPrev,
  onNext,
  step,
  handleDetailProfileValue,
  value,
}: detailProfileFunnelProps & {
  step: string;
}) => {
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    [],
  );
  const [activeHobby, setActiveHobby] = useState<string | null>(null);

  useEffect(() => {
    if (value?.hobbyList) {
      setSelectedHobbies(value.hobbyList.map(hobby => hobby.category));
      setSelectedSubCategories(value.hobbyList.map(hobby => hobby.name));
    }
  }, [value]);

  const getHobbyList = () => {
    const hobbyList: {category: string; name: string}[] = [];

    selectedHobbies.forEach(hobbyValue => {
      const hobby = HOBBY.find(item => item.value === hobbyValue);
      if (hobby) {
        if (hobby.subCategories.length === 0) {
          hobbyList.push({category: hobby.value, name: null});
        } else {
          hobby.subCategories.forEach(subCategory => {
            if (selectedSubCategories.includes(subCategory.value)) {
              hobbyList.push({
                category: hobby.value,
                name: subCategory.value,
              });
            }
          });
        }
      }
    });

    return hobbyList;
  };

  const selectHobby = (hobbyValue: string) => {
    const hobby = HOBBY.find(item => item.value === hobbyValue);

    if (selectedHobbies.includes(hobbyValue)) {
      // 이미 선택된 취미를 다시 클릭하면 서브 카테고리 창을 열기만 함
      setActiveHobby(hobbyValue);
    } else if (selectedHobbies.length < 5) {
      setSelectedHobbies([...selectedHobbies, hobbyValue]);

      // 서브 카테고리가 있는 취미일 시 활성화
      if (hobby?.subCategories.length) {
        setActiveHobby(hobbyValue);
      } else {
        setActiveHobby(null);
      }
    }
  };

  const selectSubCategory = (subCategoryValue: string) => {
    if (selectedSubCategories.includes(subCategoryValue)) {
      setSelectedSubCategories(
        selectedSubCategories.filter(item => item !== subCategoryValue),
      );
    } else if (selectedSubCategories.length < 5) {
      setSelectedSubCategories([...selectedSubCategories, subCategoryValue]);
    }
  };

  const isHobbyActive = (hobbyValue: string): boolean => {
    const hobby = HOBBY.find(item => item.value === hobbyValue);
    // 서브 카테고리 중 하나라도 선택된 경우 배경색을 변경
    return (
      (selectedHobbies.includes(hobbyValue) &&
        (hobby?.subCategories.length === 0 ||
          hobby?.subCategories.some(subCategory =>
            selectedSubCategories.includes(subCategory.value),
          ))) ||
      false
    );
  };

  return (
    <DetailLayout
      step={step}
      progress={80}
      onBackPress={onPrev}
      onButtonPress={async () => {
        const hobbyList = getHobbyList();
        await handleDetailProfileValue?.('hobbyList', hobbyList);

        onNext();
      }}
      isBtnActive={selectedSubCategories.length !== 0}>
      <CheckWrapper>
        <HobbyList>
          {HOBBY.map(item => (
            <View key={item.value}>
              <HobbyItem
                selected={isHobbyActive(item.value)}
                onPress={() => selectHobby(item.value)}>
                <HobbyLabel selected={isHobbyActive(item.value)}>
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
                      onPress={() => selectSubCategory(subItem.value)}
                      disabled={
                        selectedSubCategories.length >= 5 &&
                        !selectedSubCategories.includes(subItem.value)
                      } // 최대 5개 선택 제한
                    >
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
    </DetailLayout>
  );
};

export default 취미;

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
