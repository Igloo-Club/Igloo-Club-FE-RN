type Option = {label: string; value: number | string};

//value에 맞는 label 찾기
export const findLabelByValue = (
  options: Option[],
  targetValue: number | string | boolean,
): string => {
  const result = options.find(option => option.value === targetValue)?.label;
  if (!result) {
    return '선호 이성 정보를 입력해주세요.';
  } else {
    return result;
  }
};

export const IDEAL_MBTI_OPTION = [
  {label: 'E', value: 'E'},
  {label: 'I', value: 'I'},
  {label: 'S', value: 'S'},
  {label: 'N', value: 'N'},
  {label: 'F', value: 'F'},
  {label: 'T', value: 'T'},
  {label: 'P', value: 'P'},
  {label: 'J', value: 'J'},
];

export const IDEAL_SMOKE_OPTION = [
  {label: '핀다', value: 0},
  {label: '안핀다', value: 1},
];

export const IDEAL_RELIGION_OPTION = [
  {label: '불교', value: 'BUDDHISM'},
  {label: '기독교', value: 'CHRISTIANITY'},
  {label: '천주교', value: 'CATHOLICISM'},
  {label: '이슬람교', value: 'ISLAM'},
  {label: '기타', value: 'OTHER'},
  {label: '무교', value: 'NONE'},
];

export const IDEAL_MARRY_OPTION = [
  {label: '3년 이내', value: 3},
  {label: '5년 이내', value: 5},
  {label: '7년 이내', value: 7},
  {label: '없음', value: 0},
];
