export interface IidealType {
  preferredAgeStart?: number | null;
  preferredAgeEnd?: number | null;
  preferredHeightStart?: number | null;
  preferredHeightEnd?: number | null;
  mbtiElemList?: string[]; // 배열이면서 문자열 타입
  smoke?: boolean | null;
  religion?: string | null; // 특정 문자열의 열거형처럼 사용할 수도 있음
  marriagePlan?: number | null; // 결혼 계획
}
