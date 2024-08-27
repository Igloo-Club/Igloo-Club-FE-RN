import {MOCK_IDEAL} from '../constants/MOCK_IDEALTYPE';

export const formatIdealListValueText = (
  label: string,
  data: typeof MOCK_IDEAL,
) => {
  switch (label) {
    case '나이 범위':
      return `${data.preferredAgeStart}세부터 ${data.preferredAgeEnd}세까지`;
    case '선호하는 키':
      return `${data.preferredHeightStart}부터 ${data.preferredHeightEnd}까지`;
    case '성격 유형':
      return data.mbtiList.join(', ');
    case '흡연 여부':
      return data.smoke ? '흡연' : '비흡연';
    case '종교':
      return data.religion === 'BUDDHISM'
        ? '불교'
        : data.religion === 'CATHOLIC'
        ? '천주교'
        : data.religion === 'CHRISTIAN'
        ? '기독교'
        : '기타';
    case '결혼 계획':
      return data.marriagePlan === 1
        ? '있음'
        : data.marriagePlan === 0
        ? '없음'
        : '미정';
    default:
      return '';
  }
};
