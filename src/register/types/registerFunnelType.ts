export const RegisterstepType = [
  '회사이메일인증',
  '성별',
  '생년월일',
  '닉네임입력',
] as const;

export interface IregisterFunnulProps {
  step: (typeof RegisterstepType)[number];
  onNext: () => void;
}
