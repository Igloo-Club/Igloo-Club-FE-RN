import React, {useCallback, useState} from 'react';
import * as St from '../styles/idealTypeRenders.style';
import FooterBtn from '../../detail/components/DetailProfileFooter';
import SelectBox from '../../detail/components/SelectBox';
import useSelectOptions from '../../common/hooks/useSelectOptions';
import {checkArraysEqual} from '../utils/checkArraysEqual';
import RangeSlider from '../../common/components/rangeSlider';

export const 선호나이 = ({
  value,
  handleData,
}: {
  value: number[];
  handleData: (changedValue: typeof value) => void;
}) => {
  const [changedValue, setChangedValue] = useState(value);

  const onValueChange = useCallback((newValue: number[]) => {
    setChangedValue(newValue);
  }, []);

  return (
    <>
      <St.IdealRenderStyles.SubTitle>
        {changedValue[0]}세 부터 {changedValue[1]}세까지, 추천받고 싶어요
      </St.IdealRenderStyles.SubTitle>
      <RangeSlider
        start={20}
        end={60}
        from={changedValue[0]}
        to={changedValue[1]}
        onValueChange={onValueChange}
      />
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

export const 선호키 = ({
  value,
  handleData,
}: {
  value: number[];
  handleData: (changedValue: typeof value) => void;
}) => {
  const [changedValue, setChangedValue] = useState(value);

  const onValueChange = useCallback((newValue: number[]) => {
    setChangedValue(newValue);
  }, []);

  return (
    <>
      <St.IdealRenderStyles.SubTitle>
        {changedValue[0]}cm 부터 {changedValue[1]}cm까지, 추천 받고 싶어요
      </St.IdealRenderStyles.SubTitle>
      <RangeSlider
        start={140}
        end={200}
        from={changedValue[0]}
        to={changedValue[1]}
        onValueChange={onValueChange}
      />
      <FooterBtn
        onPress={() => {
          handleData(changedValue);
        }}
        label="확인"
        isDisabled={checkArraysEqual(value, changedValue)}
      />
    </>
  );
};

export const 선호성격유형 = ({
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

export const 선호흡연여부 = ({
  value,
  handleData,
}: {
  value: string;
  handleData: (changedValue: typeof value) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(value);
  return (
    <>
      <SelectBox
        options={['흡연', '비흡연']}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
      <SelectBox
        options={['상관없어요']}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
      <FooterBtn
        onPress={() => {
          handleData(selectedOption);
        }}
        label="확인"
        isDisabled={value === selectedOption}
      />
    </>
  );
};

export const 선호종교 = ({
  value,
  handleData,
}: {
  value: string;
  handleData: (changedValue: typeof value) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(value);
  return (
    <>
      <SelectBox
        options={['불교', '기독교']}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
      <SelectBox
        options={['천주교', '이슬람']}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
      <SelectBox
        options={['기타', '무교']}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
      <SelectBox
        options={['상관없어요']}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
      <FooterBtn
        onPress={() => {
          handleData(selectedOption);
        }}
        label="확인"
        isDisabled={value === selectedOption}
      />
    </>
  );
};

export const 선호결혼계획 = ({
  value,
  handleData,
}: {
  value: string;
  handleData: (changedValue: typeof value) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(value);
  return (
    <>
      <SelectBox
        options={['3년 이내', '5년 이내']}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
      <SelectBox
        options={['10년 이내', '없음']}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
      <FooterBtn
        onPress={() => {
          handleData(selectedOption);
        }}
        label="확인"
        isDisabled={value === selectedOption}
      />
    </>
  );
};
