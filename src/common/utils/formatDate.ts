export const formatDate = (dateString: Date) => {
  // 연도, 월, 일 추출
  const year = dateString.getFullYear();
  const month = String(dateString.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(dateString.getDate()).padStart(2, '0');

  // YYYYMMDD 형식으로 포맷
  return `${year}${month}${day}`;
};
