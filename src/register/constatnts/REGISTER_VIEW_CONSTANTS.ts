import {RegisterstepType} from '../types/registerFunnelType';

interface RegisterViewConstant {
  step: string;
  mainTitle: string;
  subTitle: string;
  notice?: string;
  buttonContent: string;
}

const RAGISTER_VIEW_CONSTATNS: RegisterViewConstant[] = [
  {
    step: RegisterstepType[0],
    mainTitle: '처음 오셨군요, 반가워요! \n회사 이메일 인증을 시작할게요.',
    subTitle: '눈길은 직장인 대상 서비스로, 인증 후 이용 가능해요.',
    notice: '재직 중인 회사를 확인하는 절차이며, 다른 용도로 사용되지 않아요.',
    buttonContent: '인증 요청하기',
  },
  {
    step: RegisterstepType[1],
    mainTitle: '어떤 일을 하고 계시나요?',
    subTitle: '직장에서 어떤 직무를 맡고 계시는지 알려주세요.',
    notice: '',
    buttonContent: '다음으로',
  },
  {
    step: RegisterstepType[2],
    mainTitle: '기본적인 정보를 알고 싶어요.\n회원님의 성별은 무엇인가요?',
    subTitle: '제 성별은..',
    buttonContent: '다음으로',
  },
  {
    step: RegisterstepType[3],
    mainTitle: '회원님의 생년월일은 언제인가요?',
    subTitle:
      '정확히 입력하지 않으면 추후 서비스 이용에\n문제가 생길 수 있어요. 정확하게 입력해 주세요.',
    buttonContent: '다음으로',
  },
  {
    step: RegisterstepType[4],
    mainTitle: '닉네임을 만들어볼까요?',
    subTitle: '프로필에 표시되는 이름으로, 언제든지 수정 가능해요.',
    buttonContent: '다음으로',
  },
  {
    step: RegisterstepType[5],
    mainTitle: '회원님이 재직 중이신\n직장의 소재지를 선택해주세요.',
    subTitle: '',
    buttonContent: '다음으로',
  },
  {
    step: RegisterstepType[6],
    mainTitle: '마지막이에요! 프로필 사진을\n최대 세 장 추가해주세요.',
    subTitle: '',
    buttonContent: '프로필 등록 완료하기',
  },
];

// 특정 step 값으로 찾기
export const findByStepRegister = (step: (typeof RegisterstepType)[number]) => {
  return RAGISTER_VIEW_CONSTATNS.find(item => item.step === step);
};
