import { generateAreaCode } from "./area-code";
import { generateCentralOfficeCode } from "./central-office-code";
import { generateLineNumber } from "./line-number";

export const generateNANPNumber = () => {
	const areaCode = generateAreaCode();
	const officeCode = generateCentralOfficeCode();
	if (officeCode === `555`) {
		// if this is a 555 number, the next 4 can only be 01XX
		const lineNumber = generateLineNumber(true);
		// not formatting the number, that should be front-end stuff
		return `${areaCode}${officeCode}${lineNumber}`;
	}
	const lineNumber = generateLineNumber();
	// not formatting the number, that should be front-end stuff
	return `${areaCode}${officeCode}${lineNumber}`;
};
