// luckily using a list of existing area codes is a lot easier than generating a random valid one
const areaCodeRegex = /^[2-9](\d)(?!\1)\d$/;
import { AREA_CODES } from './consts.js';

/**
 * Generates an area code valid for the NANP
 * @returns a 3 digit string that:
 * - does not start with a 0 or a 1 (toll center/system codes)
 * - second digit cannot be 9
 * - ends in the range of 10-99 BUT
 * - does not end in 11 (service codes)
 * 
 * - Easily Recognizable Codes:
 *   N11 - service codes
 *   N9X - expansion codes
 *   37X, 96X - set aside for future use
 * 
 * @param {string} override - if provided, will return this value if it's valid
 * otherwise it'll throw an error
 */
export const generateAreaCode = (override) =>  {
  if (override) {
    if (validateAreaCode(override)) {
      return override;
    }
    // if this package was really good, it would throw the exact reason it's invalid
    throw new Error('Invalid area code');
  }
  return AREA_CODES[Math.floor(Math.random() * AREA_CODES.length)];
}

/**
 * Validates area code
 * @param {string} code
 * @returns true if valid according to NANP
 */
export const validateAreaCode = (code) => {
  return areaCodeRegex.test(code);
}

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
    return generateCentralOfficeCode();
  }
  // 555 case
  if (first === 5 && second === 5 && third === 5) {
    // if this is a 555 number, the next 4 can only be 01XX
  }
  return `${first}${second}${third}`;
}

/**
 * Validates central office code
 * @param {string} code
 * @returns true if valid according to NANP
 */
export const validateCentralOfficeCode = (code) => {
  const digits = code.split('');
  // doesn't start with 0 or 1
  if (digits[0] === '0' || digits[0] === '1') {
    return false;
  }
  // doesn't end with 11
  if (digits[1] === '1' && digits[2] === '1') {
    return false;
  }
  // if not false must be true ¯\_(ツ)_/¯
  return true;
}

/**
 * Generates a line number valid for the NANP
 * @param {boolean} fictionalize - if true, will generate a 01XX number
 * @returns a 4 digit string that:
 * - doesn't end between 0100-0199 UNLESS
 * - it's a 555 number (reserved for fictional numbers)
 */
export const generateLineNumber = (fictionalize) => {
  if (fictionalize) {
    // return 01XX for 555 numbers
    const third = Math.floor(Math.random() * 10);
    const fourth = Math.floor(Math.random() * 10);
    return `$01${third}${fourth}`;
  }
  const first = Math.floor(Math.random() * 10);
  const second = Math.floor(Math.random() * 10);
  const third = Math.floor(Math.random() * 10);
  const fourth = Math.floor(Math.random() * 10);
  if (first === 0 && second === 1) {
    // re-roll
    return generateLineNumber();
  }
  return `${first}${second}${third}${fourth}`;
}

// This one depends on the previous one
// so a failure here isn't necessarily a failure of the code
// as long as the previous number is 555, this should be valid regardless
/**
 * Validates line number
 * @param {string} code
 * @returns true if valid according to NANP
 */
export const validateLineNumber = (code) => {
  const digits = code.split('');
  // doesn't end with 0100-0199
  if (digits[1] === '0' && digits[2] === '1' && digits[3] >= '0' && digits[3] <= '9') {
    return false;
  }
  // if not false must be true ¯\_(ツ)_/¯
  return true;
};

export const generateNANPNumber = () => {
  const areaCode = generateAreaCode();
  const officeCode = generateCentralOfficeCode();
  if (officeCode === '555') {
    // if this is a 555 number, the next 4 can only be 01XX
    const lineNumber = generateLineNumber(true);
    // not formatting the number, that should be front-end stuff
    return `${areaCode}${officeCode}${lineNumber}`;
  }
  const lineNumber = generateLineNumber();
  // not formatting the number, that should be front-end stuff
  return `${areaCode}${officeCode}${lineNumber}`;
}

const nanp = generateNANPNumber();
// split for testing purposes
const areaCode = nanp.slice(0, 3);
const officeCode = nanp.slice(3, 6);
const lineNumber = nanp.slice(6, 10);
console.log(`NANP number: ${nanp}
Area code:   ${areaCode}  (${validateAreaCode(areaCode) ? 'valid' : 'invalid'})
Office code: ${officeCode}  (${validateCentralOfficeCode(officeCode) ? 'valid' : 'invalid'})
Line number: ${lineNumber} (${validateLineNumber(lineNumber) ? 'valid' : 'invalid'})`);
