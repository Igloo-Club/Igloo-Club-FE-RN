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
      return `${data.preferredAgeStart}세부터 ${data.preferredAgeEnd}세까지`;
    case '선호하는 키':
      return `${data.preferredHeightStart}부터 ${data.preferredHeightEnd}까지`;
    case '성격 유형':
      return data.mbtiList?.join(', ');
    case '흡연 여부':
      return (
        data.smoke !== undefined &&
        findLabelByValue(IDEAL_SMOKE_OPTION, Number(data.smoke))
      );
    case '종교':
      return (
        data.religion && findLabelByValue(IDEAL_RELIGION_OPTION, data.religion)
      );
    case '결혼 계획':
      return (
        data.marriagePlan &&
        findLabelByValue(IDEAL_MARRY_OPTION, data.marriagePlan)
      );
    default:
      return '';
  }
};
