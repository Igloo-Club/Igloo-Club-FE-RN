import React, {useEffect, useState} from 'react';
import * as St from '../styles/idealTypeRenders.style';
import FooterBtn from '../../detail/components/DetailProfileFooter';
import SelectBox from '../../detail/components/SelectBox';
import useSelectOptions from '../../common/hooks/useSelectOptions';
import {checkArraysEqual} from '../utils/checkArraysEqual';

export const PreferredAge = ({
  value,
  handleData,
}: {
  value: number[];
  handleData: (changedValue: typeof value) => void;
}) => {
  const [changedValue, setChangedValue] = useState(value);
  return (
    <>
      <St.IdealRenderStyles.SubTitle>
        {changedValue[0]}세 부터 {changedValue[1]}세까지, 추천받고 싶어요
      </St.IdealRenderStyles.SubTitle>
      <FooterBtn
        onPress={() => {
          handleData(changedValue);
        }}
        label="확인"
        isDisabled={value === changedValue}
      />
    </>
  );
};

export const MbtiList = ({
  value,
  handleData,
}: {
  value: string[];
  handleData: (changedValue: typeof value) => void;
}) => {
  const {selectedOptions, handleSelect} = useSelectOptions(value);

  return (
    <>
      <St.IdealRenderStyles.SubTitle>
        선호하지 않는 요소를 선택해주세요
      </St.IdealRenderStyles.SubTitle>
      <SelectBox
        options={['E', 'I']}
        selectedOption={selectedOptions}
        onSelect={handleSelect}
        mode="multiple"
      />
      <SelectBox
        options={['S', 'N']}
        selectedOption={selectedOptions}
        onSelect={handleSelect}
        mode="multiple"
      />
      <SelectBox
        options={['T', 'F']}
        selectedOption={selectedOptions}
        onSelect={handleSelect}
        mode="multiple"
      />
      <SelectBox
        options={['J', 'P']}
        selectedOption={selectedOptions}
        onSelect={handleSelect}
        mode="multiple"
      />
      <FooterBtn
        onPress={() => {
          handleData(selectedOptions);
        }}
        label="확인"
        isDisabled={checkArraysEqual(value, selectedOptions)}
      />
    </>
  );
};
