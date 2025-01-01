export interface IidealType {
  preferredAgeStart?: number;
  preferredAgeEnd?: number;
  preferredHeightStart?: number;
  preferredHeightEnd?: number;
  mbtiElemList?: string[]; // 배열이면서 문자열 타입
  smoke?: boolean;
  religion?: string; // 특정 문자열의 열거형처럼 사용할 수도 있음
  marriagePlan?: number; // 결혼 계획
}
