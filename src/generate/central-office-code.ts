/**
 * Generates a central office code valid for the NANP
 * @returns a 3 digit string that:
 * - does not start with a 0 or a 1
 * - does not end with 11
 */
export const generateCentralOfficeCode = () => {
  const first = Math.floor(Math.random() * 8) + 2;
  const second = Math.floor(Math.random() * 9);
  const third = Math.floor(Math.random() * 9);
  if (second === 1 && third === 1) {
    // will recursion save the day?
    return generateCentralOfficeCode;
  }
  // 555 case
  if (first === 5 && second === 5 && third === 5) {
    // if this is a 555 number, the next 4 can only be 01XX
  }
  return `${first}${second}${third}`;
};
