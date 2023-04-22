/**
 * Validates central office code
 * @param {string} code
 * @returns true if valid according to NANP
 */
export const validateCentralOfficeCode = (code: string) => {
  const digits = code.split("");
  // doesn't start with 0 or 1
  if (digits[0] === "0" || digits[0] === "1") {
    return false;
  }
  // doesn't end with 11
  if (digits[1] === "1" && digits[2] === "1") {
    return false;
  }
  // if not false must be true ¯\_(ツ)_/¯
  return true;
};
