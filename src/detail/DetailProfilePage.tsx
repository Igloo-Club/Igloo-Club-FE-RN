import React from 'react';
import useFunnel from './hooks/useFunnel';
// import {View} from 'react-native';
// import styled from '@emotion/native';

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
  자기소개,
} from './funnelPages/0_index';

const stepType = [
  '키입력',
  '종교여부',
  '문신여부',
  '흡연여부',
  '결혼예정여부',
  '엠비티아이',
  '세전연봉',
  '근무형태',
  '회사규모',
  '취미',
  '한줄소개',
  '자기소개',
] as const;

const DetailProfile = ({navigation}: any) => {
  const [Funnel, setStep] = useFunnel(stepType, '키입력');

  return (
    <Funnel>
      <Funnel.Step name="키입력">
        <키입력 onNext={() => setStep('종교여부')} navigation={navigation} />
      </Funnel.Step>
      <Funnel.Step name="종교여부">
        <종교여부 onNext={() => setStep('문신여부')} navigation={navigation} />
      </Funnel.Step>
      <Funnel.Step name="문신여부">
        <문신여부 onNext={() => setStep('흡연여부')} />
      </Funnel.Step>
      <Funnel.Step name="흡연여부">
        <흡연여부 onNext={() => setStep('결혼예정여부')} />
      </Funnel.Step>
      <Funnel.Step name="결혼예정여부">
        <결혼예정여부 onNext={() => setStep('엠비티아이')} />
      </Funnel.Step>
      <Funnel.Step name="엠비티아이">
        <엠비티아이 onNext={() => setStep('세전연봉')} />
      </Funnel.Step>
      <Funnel.Step name="세전연봉">
        <세전연봉 onNext={() => setStep('근무형태')} />
      </Funnel.Step>
      <Funnel.Step name="근무형태">
        <근무형태 onNext={() => setStep('회사규모')} />
      </Funnel.Step>
      <Funnel.Step name="회사규모">
        <회사규모 onNext={() => setStep('취미')} />
      </Funnel.Step>
      <Funnel.Step name="취미">
        <취미 onNext={() => setStep('한줄소개')} />
      </Funnel.Step>
      <Funnel.Step name="한줄소개">
        <한줄소개 onNext={() => setStep('자기소개')} />
      </Funnel.Step>
      <Funnel.Step name="자기소개">
        <자기소개 onNext={() => navigation.navigate('/main-page')} />
      </Funnel.Step>
    </Funnel>
  );
};

export default DetailProfile;
