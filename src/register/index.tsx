import React, {useState} from 'react';
import useFunnel from '../common/hooks/useFunnel';
import EmailFunnel from './funnelPages/EmailFunnel';
import {RegisterstepType} from './types/registerFunnelType';
import GenderFunnel from './funnelPages/GenderFunnel';
import BirthFunnel from './funnelPages/BirthFunnel';
import NicknameFunnel from './funnelPages/NicknameFunnel';
import SelectAreaFunnel from './funnelPages/SelectAreaFunnel';
import JobFunnel from './funnelPages/JobFunnel';
import {essentialType} from './types/registerAPITypes';
import ProfileImgFunnel from './funnelPages/ProfileImgFunnel';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../common/routing/routerTypes';
import {navigate} from '../common/hooks/useNavigationRef';

type HandleChangeType = (key: keyof essentialType, value: string) => void;
type RegisterRouteProp = RouteProp<RootStackParamList, 'Register'>;

const Register = ({route}: {route: RegisterRouteProp}) => {
  const {stepIndex} = route.params;
  const [Funnel, setStep] = useFunnel(
    RegisterstepType,
    RegisterstepType[stepIndex],
  );

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
          value={profile}
        />
      </Funnel.Step>
      <Funnel.Step name={RegisterstepType[2]}>
        <GenderFunnel
          step={RegisterstepType[2]}
          onNext={() => setStep(RegisterstepType[3])}
          onPrev={() => setStep(RegisterstepType[1])}
          handleChange={handleChange}
          value={profile}
        />
      </Funnel.Step>
      <Funnel.Step name={RegisterstepType[3]}>
        <BirthFunnel
          step={RegisterstepType[3]}
          onNext={() => setStep(RegisterstepType[4])}
          onPrev={() => setStep(RegisterstepType[2])}
          handleChange={handleChange}
          value={profile}
        />
      </Funnel.Step>
      <Funnel.Step name={RegisterstepType[4]}>
        <NicknameFunnel
          step={RegisterstepType[4]}
          onNext={() => setStep(RegisterstepType[5])}
          onPrev={() => setStep(RegisterstepType[3])}
          handleChange={handleChange}
          value={profile}
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
          onNext={() => navigate('DetailProfile')}
          onPrev={() => setStep(RegisterstepType[5])}
        />
      </Funnel.Step>
    </Funnel>
  );
};

export default Register;
