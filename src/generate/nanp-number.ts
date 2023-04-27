// LOGIC

import { generateAreaCode } from "./area-code";
import { generateCentralOfficeCode } from "./central-office-code";
import { generateLineNumber } from "./line-number";

/**
 * Generates a NANP number
 * 
 * Add in ability to override the number's components
 * Add in ability to fictionalize the number with 555-01XX pattern
 */

export const generateNANPNumber = (options: {
  areaCode?: string,
  centralOfficeCode?: string,
  lineNumber?: string,
  fictionalize?: boolean,
}) => {
	let {
		areaCode,
		centralOfficeCode,
		lineNumber,
	} = options;
	const {
		fictionalize,
	} = options;
	// Area code will be assigned if not provided
	if (!areaCode) {
		areaCode = generateAreaCode();
	}
	// Central office code will be assigned if not provided
	if (!centralOfficeCode) {
		centralOfficeCode = generateCentralOfficeCode();
	}
	// Line number will be assigned if not provided
	if (!lineNumber) {
		lineNumber = generateLineNumber();
	}
	// If fictionalize is true, the number will be 555-01XX
	if (fictionalize) {
		centralOfficeCode = `555`;
		lineNumber = generateLineNumber(undefined, true);
	}
	return `${areaCode}${centralOfficeCode}${lineNumber}`;
};