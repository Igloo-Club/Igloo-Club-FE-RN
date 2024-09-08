export const getAdultMinimumDate = (): string => {
  const today = new Date();
  const minAdultDate = new Date(today.getFullYear() - 20, 0, 2); // 연도만 설정하고, 월과 일은 01-01로 고정
  return minAdultDate.toISOString().split('T')[0]; // 'YYYY-01-01' 형식으로 변환
};
