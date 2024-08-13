import React from 'react';
import useFunnel from '../common/hooks/useFunnel';
import EmailFunnel from './funnelPages/EmailFunnel';
const stepType = ['이메일입력'] as const;

const Register = ({navigation}: any) => {
  const [Funnel, setStep] = useFunnel(stepType, '이메일입력');

  return (
    <Funnel>
      <Funnel.Step name="이메일입력">
        <EmailFunnel navigation={navigation} />
      </Funnel.Step>
    </Funnel>
  );
};

export default Register;
