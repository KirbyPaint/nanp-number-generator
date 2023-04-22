// This one depends on the previous one
// so a failure here isn't necessarily a failure of the code
// as long as the previous number is 555, this should be valid regardless
/**
 * Validates line number
 * @param {string} code
 * @returns true if valid according to NANP
 */
export const validateLineNumber = (code: string) => {
  const digits = code.split("");
  // doesn't end with 0100-0199
  if (
    digits[1] === "0" &&
    digits[2] === "1" &&
    digits[3] >= "0" &&
    digits[3] <= "9"
  ) {
    return false;
  }
  // if not false must be true ¯\_(ツ)_/¯
  return true;
};
