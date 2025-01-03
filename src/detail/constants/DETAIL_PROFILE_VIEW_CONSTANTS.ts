import {DetailProfileStepType} from './../types/detailProfileFunnelTypes';
export interface DetailProfileViewConstant {
  step: string;
  mainTitle: string;
  subTitle: string;
  notice?: string;
  buttonContent: string;
}

export const DETAIL_PROFILE_VIEW_CONSTATNS: DetailProfileViewConstant[] = [
  {
    step: DetailProfileStepType[0],
    mainTitle: '상세 프로필을 완성해봐요!\n키가 어떻게 되세요?',
    subTitle: '',
    buttonContent: '다음으로',
  },
  {
    step: DetailProfileStepType[1],
    mainTitle: '종교가 있으신가요?',
    subTitle: '',
    buttonContent: '다음으로',
  },
  {
    step: DetailProfileStepType[2],
    mainTitle: '문신이 있으신가요?',
    subTitle: '',
    buttonContent: '다음으로',
  },
  {
    step: DetailProfileStepType[3],
    mainTitle: '흡연을 하고 계신가요?',
    subTitle: '',
    buttonContent: '다음으로',
  },
  {
    step: DetailProfileStepType[4],
    mainTitle: '결혼 생각이 있으신가요?\n있다면, 언제 하고 싶으신가요?',
    subTitle: '',
    buttonContent: '다음으로',
  },
  {
    step: DetailProfileStepType[5],
    mainTitle: '회원님의 MBTI가 궁금해요.',
    subTitle: '',
    buttonContent: '다음으로',
  },
  {
    step: DetailProfileStepType[6],
    mainTitle: '조심스러운 질문이지만..\n세전 연봉이 어떻게 되시나요?',
    subTitle: '',
    notice: '프로필 등록 절차일 뿐, 다른 사용자에게 절대 공개되지 않아요.',
    buttonContent: '다음으로',
  },
  {
    step: DetailProfileStepType[7],
    mainTitle: '근무 형태가 어떻게 되세요?',
    subTitle: '',
    notice: '프로필 등록 절차일 뿐, 다른 사용자에게 절대 공개되지 않아요.',
    buttonContent: '다음으로',
  },
  {
    step: DetailProfileStepType[8],
    mainTitle: '재직 중이신 회사의 규모가\n어느정도 되나요?',
    subTitle: '',
    buttonContent: '다음으로',
  },
  {
    step: DetailProfileStepType[9],
    mainTitle: '회원님이 평소 즐겨하시는\n취미를 골라주세요.',
    subTitle: '최대 5개까지 선택 가능해요.',
    buttonContent: '다음으로',
  },
  {
    step: DetailProfileStepType[10],
    mainTitle: '거의 다 완성했어요!\n짧은 한줄 소개를 적어주세요.',
    subTitle: '상대방에게 보여지는 첫인상이에요.',
    buttonContent: '프로필 등록 완료하기',
  },
  {
    step: DetailProfileStepType[11],
    mainTitle: '마지막이에요!\n자세한 자기소개를 적어주세요.',
    subTitle: '',
    buttonContent: '',
  },
];

export const findByStepDetailProfile = (
  step: (typeof DetailProfileStepType)[number],
) => {
  return DETAIL_PROFILE_VIEW_CONSTATNS.find(item => item.step === step);
};
