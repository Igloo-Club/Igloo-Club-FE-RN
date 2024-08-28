// SelectGroup.tsx
import React from 'react';
import {View} from 'react-native';
import styled from '@emotion/native';
import SelectBox from '../components/SelectBox';

interface Option {
  label: string;
  value: string | number;
}

interface SelectGroupProps {
  label: string;
  options: Option[];
  selectedOption: string | number | null;
  onSelect: (option: string | number) => void;
}

const SelectGroup: React.FC<SelectGroupProps> = ({
  label,
  options,
  selectedOption,
  onSelect,
}) => (
  <View>
    <SelectTitle>{label}</SelectTitle>
    <SelectBox
      options={options}
      selectedOption={selectedOption ? [selectedOption] : []}
      onSelect={onSelect}
      mode="single"
    />
  </View>
);

const SelectTitle = styled.Text`
  margin: 5px 0 2px 10px;
  color: #646d7a;
  font-size: 14px;
  font-weight: 500;
`;

export default SelectGroup;
