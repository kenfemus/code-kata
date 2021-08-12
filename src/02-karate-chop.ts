export const chop1 = (search: number, arrayOfNumber: number[]): number => {
  return arrayOfNumber.findIndex((a) => a === search);
}

export const chop2 = (search: number, arrayOfNumber: number[]): number => {
  for (let i = 0; i < arrayOfNumber.length; i++) {
    if (arrayOfNumber[i] === search) {
      return i;
    }
  }
  return -1;
}