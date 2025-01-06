// 두 배열이 같은 값인지 확인하느 함수
export const checkArraysEqual = (
  arr1: (string | number | null | undefined)[] | undefined,
  arr2: string[] | (number | null | undefined)[],
) => {
  if (arr1?.every(item => item === null || item === undefined)) {
    return false;
  } else if (!arr1 || arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((item, index) => item === arr2[index]);
};
