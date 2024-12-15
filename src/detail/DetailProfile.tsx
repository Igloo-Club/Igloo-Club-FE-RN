import React, {useState} from 'react';
import useFunnel from '../common/hooks/useFunnel';
import {detailProfileTypes} from './types/detailProfileAPITypes';
import {
  키입력,
  종교여부,
  문신여부,
  흡연여부,
  결혼예정여부,
  엠비티아이,
  세전연봉,
  근무형태,
  회사규모,
  취미,
  한줄소개,
} from './funnelPages/0_index';
import {DetailProfileStepType} from './types/detailProfileFunnelTypes';
import instance from '../common/apis/axiosInstance';

type HandleDetailProfileValueType = <K extends keyof detailProfileTypes>(
  key: K,
  value: detailProfileTypes[K],
) => void;

const DetailProfile = ({navigation}: any) => {
  const [Funnel, setStep] = useFunnel(
    DetailProfileStepType,
    DetailProfileStepType[0],
  );

  const [detailProfile, setDetailProfile] = useState<detailProfileTypes>({
    height: 0,
    religion: '',
    tattoo: false,
    smoke: false,
    marriagePlan: 0,
    mbti: '',
    grossSalary: 0,
    workArrangementList: [],
    scale: '',
    hobbyList: [],
    intro: '',
  });

  console.log(detailProfile);

  const handleDetailProfileValue: HandleDetailProfileValueType = <
    K extends keyof detailProfileTypes,
  >(
    key: K,
    value: detailProfileTypes[K],
  ) => {
    setDetailProfile((prevValues: detailProfileTypes) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await instance.post('/api/member/additional', detailProfile);
      if (res.status === 200) {
        navigation.navigate('MainPage');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Funnel>
      <Funnel.Step name={DetailProfileStepType[0]}>
        <키입력
          step={DetailProfileStepType[0]}
          onPrev={() => navigation.navigate('Landing')}
          onNext={() => setStep(DetailProfileStepType[1])}
        />
      </Funnel.Step>
      <Funnel.Step name={DetailProfileStepType[1]}>
        <종교여부
          step={DetailProfileStepType[1]}
          onPrev={() => setStep(DetailProfileStepType[2])}
          onNext={() => setStep(DetailProfileStepType[0])}
          handleDetailProfileValue={handleDetailProfileValue}
        />
      </Funnel.Step>
      <Funnel.Step name={DetailProfileStepType[2]}>
        <문신여부
          step={DetailProfileStepType[2]}
          onPrev={() => setStep(DetailProfileStepType[1])}
          onNext={() => setStep(DetailProfileStepType[3])}
          handleDetailProfileValue={handleDetailProfileValue}
        />
      </Funnel.Step>
      <Funnel.Step name={DetailProfileStepType[3]}>
        <흡연여부
          step={DetailProfileStepType[3]}
          onPrev={() => setStep(DetailProfileStepType[2])}
          onNext={() => setStep(DetailProfileStepType[4])}
          handleDetailProfileValue={handleDetailProfileValue}
        />
      </Funnel.Step>
      <Funnel.Step name={DetailProfileStepType[4]}>
        <결혼예정여부
          step={DetailProfileStepType[4]}
          onPrev={() => setStep(DetailProfileStepType[3])}
          onNext={() => setStep(DetailProfileStepType[5])}
          handleDetailProfileValue={handleDetailProfileValue}
        />
      </Funnel.Step>
      <Funnel.Step name={DetailProfileStepType[5]}>
        <엠비티아이
          step={DetailProfileStepType[5]}
          onPrev={() => setStep(DetailProfileStepType[4])}
          onNext={() => setStep(DetailProfileStepType[6])}
          handleDetailProfileValue={handleDetailProfileValue}
        />
      </Funnel.Step>
      <Funnel.Step name={DetailProfileStepType[6]}>
        <세전연봉
          step={DetailProfileStepType[6]}
          onPrev={() => setStep(DetailProfileStepType[5])}
          onNext={() => setStep(DetailProfileStepType[7])}
          handleDetailProfileValue={handleDetailProfileValue}
        />
      </Funnel.Step>
      <Funnel.Step name={DetailProfileStepType[7]}>
        <근무형태
          step={DetailProfileStepType[7]}
          onPrev={() => setStep(DetailProfileStepType[6])}
          onNext={() => setStep(DetailProfileStepType[8])}
          handleDetailProfileValue={handleDetailProfileValue}
        />
      </Funnel.Step>
      <Funnel.Step name={DetailProfileStepType[8]}>
        <회사규모
          step={DetailProfileStepType[8]}
          onPrev={() => setStep(DetailProfileStepType[7])}
          onNext={() => setStep(DetailProfileStepType[9])}
          handleDetailProfileValue={handleDetailProfileValue}
        />
      </Funnel.Step>
      <Funnel.Step name={DetailProfileStepType[9]}>
        <취미
          step={DetailProfileStepType[9]}
          onPrev={() => setStep(DetailProfileStepType[8])}
          onNext={() => setStep(DetailProfileStepType[10])}
          handleDetailProfileValue={handleDetailProfileValue}
        />
      </Funnel.Step>
      <Funnel.Step name={DetailProfileStepType[10]}>
        <한줄소개
          step={DetailProfileStepType[10]}
          onPrev={() => setStep(DetailProfileStepType[9])}
          onNext={handleSubmit}
        />
      </Funnel.Step>
    </Funnel>
  );
};

export default DetailProfile;
