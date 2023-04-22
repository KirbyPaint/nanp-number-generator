const areaCodeRegex = /^[2-9](\d)(?!\1)\d$/;

/**
 * Validates area code
 * @param {string} code
 * @returns true if valid according to NANP
 */
export const validateAreaCode = (code: string) => {
  return areaCodeRegex.test(code);
};
