import { AREA_CODES } from "../consts";

/**
 * Validates area code
 * @param {string} code
 * @returns true if valid according to NANP
 */
export const validateAreaCode = (code: string) => {
	return AREA_CODES.includes(parseInt(code, 10));
};
