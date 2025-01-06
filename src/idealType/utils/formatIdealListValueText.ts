import {
  IDEAL_MARRY_OPTION,
  IDEAL_RELIGION_OPTION,
  IDEAL_SMOKE_OPTION,
  findLabelByValue,
} from '../constants/IDEAL_OPTIONS';
import {IidealType} from '../types/idealType';

export const formatIdealListValueText = (
  label: string,
  data: IidealType | undefined,
) => {
  if (!data) {
    return;
  }
  switch (label) {
    case '나이 범위':
      return data.preferredAgeStart
        ? `${data.preferredAgeStart}세부터 ${data.preferredAgeEnd}세까지`
        : '선호하는 나이 범위를 입력해주세요';
    case '선호하는 키':
      return data.preferredHeightStart
        ? `${data.preferredHeightStart}부터 ${data.preferredHeightEnd}까지`
        : '선호하는 키의 범위를 입력해주세요';
    case '성격 유형':
      return data.mbtiElemList?.length
        ? data.mbtiElemList?.join(', ')
        : '선호 성격 유형을 입력해주세요';
    case '흡연 여부':
      return data.smoke
        ? findLabelByValue(IDEAL_SMOKE_OPTION, Number(data.smoke))
        : '선호 흡연 여부를 선택해주세요';
    case '종교':
      return data.religion
        ? findLabelByValue(IDEAL_RELIGION_OPTION, data.religion)
        : '선호 종교를 선택해주세요';
    case '결혼 계획':
      return data.marriagePlan
        ? findLabelByValue(IDEAL_MARRY_OPTION, data.marriagePlan)
        : '선호 결혼 계획을 선택해주세요';
    default:
      return '';
  }
};
