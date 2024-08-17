import React from 'react';
import useFunnel from '../common/hooks/useFunnel';
import EmailFunnel from './funnelPages/EmailFunnel';
import {RegisterstepType} from './types/registerFunnelType';
import GenderFunnel from './funnelPages/GenderFunnel';
import BirthFunnel from './funnelPages/BirthFunnel';
import NinknameFunnel from './funnelPages/NinknameFunnel';
import SelectAreaFunnel from './funnelPages/SelectAreaFunnel';

const Register = () => {
  const [Funnel, setStep] = useFunnel(RegisterstepType, RegisterstepType[0]);

  return (
    <Funnel>
      <Funnel.Step name={RegisterstepType[0]}>
        <EmailFunnel
          step={RegisterstepType[0]}
          onNext={() => setStep(RegisterstepType[1])}
          onPrev={() => setStep(RegisterstepType[0])}
        />
      </Funnel.Step>
      <Funnel.Step name={RegisterstepType[1]}>
        <GenderFunnel
          step={RegisterstepType[1]}
          onNext={() => setStep(RegisterstepType[2])}
          onPrev={() => setStep(RegisterstepType[0])}
        />
      </Funnel.Step>
      <Funnel.Step name={RegisterstepType[2]}>
        <BirthFunnel
          step={RegisterstepType[2]}
          onNext={() => setStep(RegisterstepType[3])}
          onPrev={() => setStep(RegisterstepType[1])}
        />
      </Funnel.Step>
      <Funnel.Step name={RegisterstepType[3]}>
        <NinknameFunnel
          step={RegisterstepType[3]}
          onNext={() => setStep(RegisterstepType[4])}
          onPrev={() => setStep(RegisterstepType[2])}
        />
      </Funnel.Step>
      <Funnel.Step name={RegisterstepType[4]}>
        <SelectAreaFunnel
          step={RegisterstepType[4]}
          onNext={() => setStep(RegisterstepType[0])}
          onPrev={() => setStep(RegisterstepType[3])}
        />
      </Funnel.Step>
    </Funnel>
  );
};

export default Register;
