import React, {useState} from 'react';
import styled from '@emotion/native';
import instance from '../../common/apis/axiosInstance';
import {SelectArrow} from '../assets/0_index';
import {TouchableOpacity, View, Text} from 'react-native';

const CustomSelect = ({
  onSelectedChange,
}: {
  onSelectedChange: (selected: string) => void;
}) => {
  const [selected, setSelected] = useState<string>('서울 광화문');
  const selectList = ['서울 광화문', '경기도 판교'];
  const [showToggle, setShowToggle] = useState<boolean>(false);

  //   const handleChangePlace = async () => {
  //     let place = '';

  //     if (selected === '서울 광화문') {
  //       place = 'GWANGHWAMUN';
  //     } else if (selected === '경기도 판교') {
  //       place = 'PANGYO';
  //     }

  //     try {
  //       await instance.patch('/api/member/location', { location: place });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleSelect = (value: string) => {
    if (selected === '서울 광화문') {
      setSelected(value);
      setShowToggle(false);
    } else if (selected === '경기도 판교') {
      setSelected(value);
      setShowToggle(false);
      onSelectedChange(selected);
    }
  };

  //   const fetchData = async () => {
  //     await handleChangePlace();
  //     onSelectedChange(selected);
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   }, [selected]);

  const handleToggle = () => {
    setShowToggle(prev => !prev);
  };

  return (
    <Container>
      <SelectBox onPress={handleToggle}>
        <SelectValue>{selected}</SelectValue>
        <SelectArrow />
      </SelectBox>
      {showToggle && (
        <OptionBox>
          {selectList.map(item => (
            <Option key={item} onPress={() => handleSelect(item)}>
              {item}
            </Option>
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
  left: 20;
  width: 9rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 0.3rem;
  margin-top: 2rem;
  background-color: white;
  border: 1px solid gray;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
`;

const Option = styled(TouchableOpacity)`
  padding: 0.5rem;

  color: gray;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;
