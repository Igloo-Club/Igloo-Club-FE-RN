import React from 'react';
import styled from '@emotion/native';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'react-native';

interface Option {
  label: string;
  value: string | number;
  explain: string;
  icon: string;
}

interface SelectBoxProps {
  options: Option[];
  selectedOption: (string | number)[];
  onSelect: (option: string | number) => void;
  mode: 'single' | 'multiple';
}

const SelectBoxArea: React.FC<SelectBoxProps> = ({
  options,
  selectedOption = [],
  onSelect,
  mode,
}) => {
  const handleSelect = (option: string | number) => {
    if (mode === 'multiple') {
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
      {options.map((option, index) => {
        const isSelected = selectedOption.includes(option.value);
        return (
          <SelectBtn
            key={index}
            onPress={() => handleSelect(option.value)}
            isSelected={isSelected}>
            <StContainer>
              <Text>{option.icon}</Text>
              <StExplain isSelected={isSelected}>{option.explain}</StExplain>
              <StLabel isSelected={isSelected}>
                <StLabelText isSelected={isSelected}>
                  {option.label}
                </StLabelText>
              </StLabel>
            </StContainer>
          </SelectBtn>
        );
      })}
    </SelectWrapper>
  );
};

export default SelectBoxArea;

const SelectWrapper = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const SelectBtn = styled(TouchableOpacity)<{isSelected: boolean}>`
  width: 150px;
  margin: 5px 5px;
  padding: 28px 0;
  border-radius: 10px;
  border: ${({isSelected}) => (isSelected ? '1.5px #FF6C62;' : '1px #E5E8ED;')};
`;

const StContainer = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const StExplain = styled(Text)<{isSelected: boolean}>`
  color: ${({isSelected}) => (isSelected ? '#333A44' : '#9FA4B0')};
  ${({theme}) => theme.fonts.body2b};
  text-align: center;
`;

const StLabel = styled(View)<{isSelected: boolean}>`
  width: fit-content;
  padding: 5px 13px;
  border-radius: 20px;
  background-color: ${({isSelected, theme}) =>
    isSelected ? theme.colors.alpha20_primary : '#E4E8EC'};
`;

const StLabelText = styled(Text)<{isSelected: boolean}>`
  color: ${({isSelected, theme}) =>
    isSelected ? theme.colors.primary : '#9FA4B0'};
  ${({theme}) => theme.fonts.body2b};
`;
