// components/SelectBox.tsx
import React from 'react';
import styled from '@emotion/native';
import {View, TouchableOpacity, Text} from 'react-native';

interface SelectBoxProps {
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <SelectWrapper>
      {options.map((option, index) => (
        <SelectBtn
          key={index}
          onPress={() => onSelect(option)}
          isSelected={selectedOption === option}>
          <SelectText>{option}</SelectText>
        </SelectBtn>
      ))}
    </SelectWrapper>
  );
};

export default SelectBox;

const SelectWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-around;
`;

const SelectBtn = styled(TouchableOpacity)<{isSelected: boolean}>`
  width: 150px;
  margin: 5px 5px;
  padding: 15px 0px;
  border-radius: 10px;
  border: ${({isSelected}) => (isSelected ? '1.5px #FF6C62;' : '1px #E5E8ED;')};
`;

const SelectText = styled(Text)`
  text-align: center;
  color: #9fa4b0;
  font-size: 16px;
  font-weight: 500;
`;
