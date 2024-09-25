import {essentialType} from './registerAPITypes';

export const RegisterstepType = [
  '회사이메일인증',
  '성별',
  '직무입력',
  '생년월일',
  '닉네임입력',
  '지역선택',
  '이미지등록',
] as const;

export interface IregisterFunnulProps {
  step: (typeof RegisterstepType)[number];
  onNext: () => void;
  onPrev: () => void;
  handleChange?: (key: keyof essentialType, value: string) => void;
}
