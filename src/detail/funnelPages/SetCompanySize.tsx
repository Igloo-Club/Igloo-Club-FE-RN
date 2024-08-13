import React, {useState} from 'react';
import {View, Text} from 'react-native';
import DetailProfileHeader from '../components/DetailProfileHeader';
import {DETAIL_PROFILE_VIEW_CONSTATNS} from '../constants/DETAIL_PROFILE_VIEW_CONSTANTS';
import SelectBox from '../components/SelectBox';
import FooterBtn from '../components/DetailProfileFooter';
import {globalStyles} from '../../common/styles/globalStyles';
import {NavTypesProps} from '../types/navTypes';

const 회사규모 = ({
  onNext,
  step,
  setStep,
  navigation,
}: NavTypesProps & {
  step: string;
  setStep: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleNextStep = () => {
    setStep(prevStep => prevStep + 1);
    onNext();
  };

  return (
    <View style={globalStyles.container}>
      <DetailProfileHeader percent={72} navigation={navigation} />
      <Text style={globalStyles.title}>
        {
          DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step)
            ?.mainTitle
        }{' '}
      </Text>
      <SelectBox
        options={['대기업', '중견기업']}
        selectedOption={selectedOption ? [selectedOption] : []}
        onSelect={setSelectedOption}
        mode="single"
      />
      <SelectBox
        options={['중소기업', '스타트업']}
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

export default 회사규모;
