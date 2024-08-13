import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavTypesProps} from '../types/navTypes';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';

const 종교여부 = ({
  onNext,
  step,
  setStep,
  navigation,
}: NavTypesProps & {
  step: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {}, [step]);

  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
    onNext();
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={16} navigation={navigation} />
      <Text style={globalStyles.title}>
        {
          DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step)
            ?.mainTitle
        }{' '}
      </Text>
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
      <FooterBtn
        onPress={handleNextStep}
        isDisabled={!selectedOption}
        label="다음으로"
      />
    </View>
  );
};

export default 종교여부;
