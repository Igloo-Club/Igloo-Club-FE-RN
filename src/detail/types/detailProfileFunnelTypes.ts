import {detailProfileTypes} from './detailProfileAPITypes';

export const DetailProfileStepType = [
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

export interface detailProfileFunnelProps {
  step: (typeof DetailProfileStepType)[number];
  onPrev: () => void;
  onNext: () => void;
  handleDetailProfileValue?: <K extends keyof detailProfileTypes>(
    key: K,
    value: detailProfileTypes[K],
  ) => void;
}
