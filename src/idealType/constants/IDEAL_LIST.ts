interface IIDEAL_LIST {
  label: string;
  key: keyof typeof IDEAL_KEY;
}

//선호 이성 설정 리스트 목록
export const IDEAL_LIST: IIDEAL_LIST[] = [
  {
    label: '나이 범위',
    key: 'preferredAge',
  },
  {
    label: '선호하는 키',
    key: 'preferredHeight',
  },
  {
    label: '성격 유형',
    key: 'mbtiElemList',
  },
  {
    label: '흡연 여부',
    key: 'smoke',
  },
  {
    label: '종교',
    key: 'religion',
  },
  {
    label: '결혼 계획',
    key: 'marriagePlan',
  },
];

export const IDEAL_KEY = {
  preferredAge: 'preferredAge',
  preferredHeight: 'preferredHeight',
  mbtiElemList: 'mbtiElemList',
  smoke: 'smoke',
  religion: 'religion',
  marriagePlan: 'marriagePlan',
};
