import React from 'react';
import styled from '@emotion/native';
import {View, TouchableOpacity, Text} from 'react-native';

interface Option {
  label: string;
  value: string | number;
}

interface SelectBoxProps {
  options: Option[];
  selectedOption: (string | number | null | undefined)[];
  onSelect: (option: string | number) => void;
  mode: 'single' | 'multiple';
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  selectedOption = [],
  onSelect,
  mode,
}) => {
  const handleSelect = (option: string | number) => {
    if (mode === 'multiple') {
      // 다중 선택 모드 -> MBTI 페이지
      if (selectedOption.includes(option)) {
        onSelect(option);
      } else {
        onSelect(option);
      }
    } else {
      if (selectedOption.length === 0 || !selectedOption.includes(option)) {
        onSelect(option);
      }
    }
  };

  return (
    <SelectWrapper>
      {options.map((option, index) => (
        <SelectBtn
          key={index}
          onPress={() => handleSelect(option.value)}
          isSelected={selectedOption.includes(option.value)}>
          <SelectText isSelected={selectedOption.includes(option.value)}>
            {option.label}
          </SelectText>
        </SelectBtn>
      ))}
    </SelectWrapper>
  );
};

export default SelectBox;

const SelectWrapper = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const SelectBtn = styled(TouchableOpacity)<{isSelected: boolean}>`
  width: 150px;
  margin: 5px 5px;
  padding: 15px 0px;
  border-radius: 10px;
  border: ${({isSelected}) => (isSelected ? '1.5px #FF6C62;' : '1px #E5E8ED;')};
`;

const SelectText = styled(Text)<{isSelected: boolean}>`
  text-align: center;
  color: ${({isSelected}) => (isSelected ? '#333A44;' : '#9fa4b0;')};
  font-size: 16px;
  font-weight: ${({isSelected}) => (isSelected ? '600' : '#500;')};
`;
