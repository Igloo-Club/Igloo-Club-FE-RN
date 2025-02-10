import React, {useState, useEffect} from 'react';
import styled from '@emotion/native';
import {SelectArrow} from '../assets/0_index';
import {TouchableOpacity, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const locationMap: Record<string, string> = {
  GANGNAM: '강남',
  PANGYO: '판교',
  GWANGHWAMUN: '광화문',
  YEOUIDO: '여의도',
};

const reverseLocationMap: Record<string, string> = {
  강남: 'GANGNAM',
  판교: 'PANGYO',
  광화문: 'GWANGHWAMUN',
  여의도: 'YEOUIDO',
};

const CustomSelect = ({
  location,
  onSelectedChange,
}: {
  location: string;
  refreshList: () => void;
  onSelectedChange: (selected: string) => void;
}) => {
  const [selected, setSelected] = useState<string>(locationMap[location]);
  const selectList = ['광화문', '판교', '강남', '여의도'];
  const [showToggle, setShowToggle] = useState<boolean>(false);

  useEffect(() => {
    const fetchStoredLocation = async () => {
      const storedLocation = await AsyncStorage.getItem('selectedLocation');
      if (storedLocation) {
        setSelected(storedLocation);
      } else {
        setSelected(locationMap[location]);
      }
    };
    fetchStoredLocation();
  }, [location]);

  const handleSelect = async (value: string) => {
    setSelected(value);
    setShowToggle(false);
    await AsyncStorage.setItem('selectedLocation', value);
    onSelectedChange(reverseLocationMap[value]);
  };

  return (
    <Container>
      <SelectBox onPress={() => setShowToggle(prev => !prev)}>
        <SelectValue>{selected} 주변</SelectValue>
        <SelectArrow />
      </SelectBox>
      {showToggle && (
        <OptionBox>
          {selectList.map(item => (
            <Options key={item} onPress={() => handleSelect(item)}>
              <Option selected={item === selected}>{item}</Option>
            </Options>
          ))}
        </OptionBox>
      )}
    </Container>
  );
};

export default CustomSelect;

const Container = styled(View)`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 17px;
`;

const SelectBox = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const SelectValue = styled(Text)`
  color: #686f7a;
  font-size: 16px;
  font-weight: 500;

  text-decoration: underline;
`;

const OptionBox = styled(View)`
  position: absolute;
  padding: 10px 15px;
  margin-top: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
  gap: 15px;
`;

const Options = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

const Option = styled.Text<{selected: boolean}>`
  font-size: 15px;
  font-weight: ${({selected}) => (selected ? '700' : '600')};
  color: ${({selected}) => (selected ? '#FA7268' : 'gray')};
`;
