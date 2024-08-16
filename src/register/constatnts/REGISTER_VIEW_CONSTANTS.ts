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
    mainTitle: '기본적인 정보를 알고 싶어요.\n회원님의 성별은 무엇인가요?.',
    subTitle: '제 성별은..',
    buttonContent: '다음으로',
  },
  {
    step: RegisterstepType[2],
    mainTitle: '회원님의 생년월일은 언제인가요?',
    subTitle:
      '정확히 입력하지 않으면 추후 서비스 이용에\n문제가 생길 수 있어요. 정확하게 입력해 주세요.',
    buttonContent: '다음으로',
  },
  {
    step: RegisterstepType[3],
    mainTitle: '닉네임을 만들어볼까요?',
    subTitle: '프로필에 표시되는 이름으로, 언제든지 수정 가능해요.',
    buttonContent: '프로필 등록 완료하기',
  },
];

// 특정 step 값으로 찾기
export const findByStepRegister = (step: (typeof RegisterstepType)[number]) => {
  return RAGISTER_VIEW_CONSTATNS.find(item => item.step === step);
};
