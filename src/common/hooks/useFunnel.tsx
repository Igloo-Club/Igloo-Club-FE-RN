import React, {Children, ReactNode, isValidElement, useState} from 'react';

interface FunnelProps<T extends readonly string[]> {
  step: T[number];
  children: ReactNode;
}

interface StepProps<T extends readonly string[]> {
  name: T[number];
  children?: ReactNode;
}

// Funnel 컴포넌트: 현재 단계에 해당하는 콘텐츠만 렌더링
const Funnel = <T extends readonly string[]>({
  step,
  children,
}: FunnelProps<T>) => {
  const validElements = Children.toArray(children).filter(isValidElement);
  const targetElement = validElements.find(
    child => (child.props as StepProps<T>)?.name === step,
  );

  if (!targetElement) {
    return null;
  }

  return <>{targetElement}</>;
};

// Step 컴포넌트: 각 단계를 정의
const Step = <T extends readonly string[]>({children}: StepProps<T>) => {
  return <>{children}</>;
};

const useFunnel = <T extends readonly string[]>(
  steps: T,
  defaultStep: T[number],
) => {
  const [step, setStep] = useState(defaultStep);

  // FunnelElement 생성: step과 함께 렌더링
  const FunnelElement: React.FC<Omit<FunnelProps<T>, 'step'>> & {
    Step: React.FC<StepProps<T>>;
  } = props => {
    return <Funnel step={step} {...props} />;
  };

  FunnelElement.Step = Step as React.FC<StepProps<T>>;

  return [FunnelElement, setStep] as const;
};

export default useFunnel;
