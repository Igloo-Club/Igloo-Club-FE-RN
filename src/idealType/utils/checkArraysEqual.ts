// 두 배열이 같은 값인지 확인하느 함수
export const checkArraysEqual = (
  arr1: string[] | number[] | undefined,
  arr2: string[] | number[],
) => {
  if (!arr1 || arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((item, index) => item === arr2[index]);
};
