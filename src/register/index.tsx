import React, {useState} from 'react';
import useFunnel from '../common/hooks/useFunnel';
import EmailFunnel from './funnelPages/EmailFunnel';
import {RegisterstepType} from './types/registerFunnelType';
import GenderFunnel from './funnelPages/GenderFunnel';
import BirthFunnel from './funnelPages/BirthFunnel';
import NinknameFunnel from './funnelPages/NinknameFunnel';
import SelectAreaFunnel from './funnelPages/SelectAreaFunnel';
import JobFunnel from './funnelPages/JobFunnel';
import {essentialType} from './types/registerAPITypes';
import ProfileImgFunnel from './funnelPages/ProfileImgFunnel';

type HandleChangeType = (key: keyof essentialType, value: string) => void;

const Register = ({navigation}: any) => {
  const [Funnel, setStep] = useFunnel(RegisterstepType, RegisterstepType[0]);

  const [profile, setProfile] = useState<essentialType>({
    nickname: '',
    sex: '',
    birthdate: '',
    job: '',
  });

  const handleChange: HandleChangeType = (
    key: keyof essentialType,
    value: string,
  ) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [key]: value,
    }));
  };

  const submitEssential = async () => {
    try {
      //api
      console.log(profile);
      setStep(RegisterstepType[5]);
    } catch (err) {
      console.log(err);
    }
  };

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
        <JobFunnel
          step={RegisterstepType[1]}
          onNext={() => setStep(RegisterstepType[2])}
          onPrev={() => setStep(RegisterstepType[0])}
          handleChange={handleChange}
        />
      </Funnel.Step>
      <Funnel.Step name={RegisterstepType[2]}>
        <GenderFunnel
          step={RegisterstepType[2]}
          onNext={() => setStep(RegisterstepType[3])}
          onPrev={() => setStep(RegisterstepType[1])}
          handleChange={handleChange}
        />
      </Funnel.Step>
      <Funnel.Step name={RegisterstepType[3]}>
        <BirthFunnel
          step={RegisterstepType[3]}
          onNext={() => setStep(RegisterstepType[4])}
          onPrev={() => setStep(RegisterstepType[2])}
          handleChange={handleChange}
        />
      </Funnel.Step>
      <Funnel.Step name={RegisterstepType[4]}>
        <NinknameFunnel
          step={RegisterstepType[4]}
          onNext={submitEssential}
          onPrev={() => setStep(RegisterstepType[3])}
          handleChange={handleChange}
        />
      </Funnel.Step>
      <Funnel.Step name={RegisterstepType[5]}>
        <SelectAreaFunnel
          step={RegisterstepType[5]}
          onNext={() => setStep(RegisterstepType[6])}
          onPrev={() => setStep(RegisterstepType[4])}
        />
      </Funnel.Step>
      <Funnel.Step name={RegisterstepType[6]}>
        <ProfileImgFunnel
          step={RegisterstepType[6]}
          onNext={() => navigation.navigate('IdealType')}
          onPrev={() => setStep(RegisterstepType[5])}
        />
      </Funnel.Step>
    </Funnel>
  );
};

export default Register;
