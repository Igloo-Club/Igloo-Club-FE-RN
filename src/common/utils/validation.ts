export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateKoreanEnglishNumbers = (input: string) => {
  const regex = /^[a-zA-Z0-9가-힣]+$/;
  return regex.test(input);
};
