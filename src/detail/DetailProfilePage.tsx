import React, {useState} from 'react';
import useFunnel from '../common/hooks/useFunnel';
import {DetailProfileTypes} from './types/detailProfileTypes';

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
] as const;

const DetailProfile = ({navigation}: any) => {
  const [Funnel, setStep] = useFunnel(stepType, '키입력');

  const [detailProgileValues, setDetailProfileValues] =
    useState<DetailProfileTypes>({
      height: 0,
      religion: '',
      tattoo: false,
      smoke: false,
      marriagePlan: 0,
      mbti: '',
      grossSalary: 0,
      job: '',
      workArrangementList: [],
      scale: '',
      hobbyList: [],
      intro: '',
    });

  const handleDetailProfileValue = (data: DetailProfileTypes) => {
    setDetailProfileValues(prevValues => ({
      ...prevValues,
      ...data,
    }));
  };

  return (
    <Funnel>
      <Funnel.Step name="키입력">
        <키입력
          onPrev={() => setStep('키입력')}
          onNext={() => setStep('종교여부')}
          step="키입력"
          handleDetailProfileValue={handleDetailProfileValue}
          detailProfileValues={detailProgileValues}
        />
      </Funnel.Step>
      <Funnel.Step name="종교여부">
        <종교여부
          onPrev={() => setStep('키입력')}
          onNext={() => setStep('문신여부')}
          step="종교여부"
          handleDetailProfileValue={handleDetailProfileValue}
          detailProfileValues={detailProgileValues}
        />
      </Funnel.Step>
      <Funnel.Step name="문신여부">
        <문신여부
          onPrev={() => setStep('종교여부')}
          onNext={() => setStep('흡연여부')}
          step="문신여부"
          handleDetailProfileValue={handleDetailProfileValue}
          detailProfileValues={detailProgileValues}
        />
      </Funnel.Step>
      <Funnel.Step name="흡연여부">
        <흡연여부
          onPrev={() => setStep('문신여부')}
          onNext={() => setStep('결혼예정여부')}
          step="흡연여부"
          handleDetailProfileValue={handleDetailProfileValue}
          detailProfileValues={detailProgileValues}
        />
      </Funnel.Step>
      <Funnel.Step name="결혼예정여부">
        <결혼예정여부
          onPrev={() => setStep('흡연여부')}
          onNext={() => setStep('엠비티아이')}
          step="결혼예정여부"
          handleDetailProfileValue={handleDetailProfileValue}
          detailProfileValues={detailProgileValues}
        />
      </Funnel.Step>
      <Funnel.Step name="엠비티아이">
        <엠비티아이
          onPrev={() => setStep('결혼예정여부')}
          onNext={() => setStep('세전연봉')}
          step="엠비티아이"
          handleDetailProfileValue={handleDetailProfileValue}
          detailProfileValues={detailProgileValues}
        />
      </Funnel.Step>
      <Funnel.Step name="세전연봉">
        <세전연봉
          onPrev={() => setStep('엠비티아이')}
          onNext={() => setStep('근무형태')}
          step="세전연봉"
          handleDetailProfileValue={handleDetailProfileValue}
          detailProfileValues={detailProgileValues}
        />
      </Funnel.Step>
      <Funnel.Step name="근무형태">
        <근무형태
          onPrev={() => setStep('세전연봉')}
          onNext={() => setStep('회사규모')}
          step="근무형태"
          handleDetailProfileValue={handleDetailProfileValue}
          detailProfileValues={detailProgileValues}
        />
      </Funnel.Step>
      <Funnel.Step name="회사규모">
        <회사규모
          onPrev={() => setStep('근무형태')}
          onNext={() => setStep('취미')}
          step="회사규모"
          handleDetailProfileValue={handleDetailProfileValue}
          detailProfileValues={detailProgileValues}
        />
      </Funnel.Step>
      <Funnel.Step name="취미">
        <취미
          onPrev={() => setStep('회사규모')}
          onNext={() => setStep('한줄소개')}
          step="취미"
          handleDetailProfileValue={handleDetailProfileValue}
          detailProfileValues={detailProgileValues}
        />
      </Funnel.Step>
      <Funnel.Step name="한줄소개">
        <한줄소개
          onPrev={() => setStep('취미')}
          onNext={() => navigation.navigate('/main-page')}
          step="한줄소개"
          handleDetailProfileValue={handleDetailProfileValue}
          detailProfileValues={detailProgileValues}
        />
      </Funnel.Step>
    </Funnel>
  );
};

export default DetailProfile;
