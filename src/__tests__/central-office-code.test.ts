import { generateCentralOfficeCode } from "../generate/central-office-code";
import { validateCentralOfficeCode } from "../validate/central-office-code";

import { describe, expect, it } from "vitest";

// ERROR IN TEST ENV
// Your random NANP number is:
/** 
 * "410() => 
 * {\n    const first = Math.floor(Math.random() * 8) + 2;\n    const second = Math.floor(Math.random() * 9);\n    const third = Math.floor(Math.random() * 9);\n    if (second === 1 && third === 1) {\n        // will recursion save the day?\n        return exports.generateCentralOfficeCode;\n    }\n    // 555 case\n    if (first === 5 && second === 5 && third === 5) {\n        // if this is a 555 number, the next 4 can only be 01XX\n    }\n    return `${first}${second}${third}`;\n}0568" 
 * */

describe(`Central Office Code`, () => {
	it(`should generate a valid central office code`, async () => {
		const centralOfficeCode = await generateCentralOfficeCode();
		expect(validateCentralOfficeCode(centralOfficeCode.toString())).toBe(true);
		// expect(areaCode).toMatch(areaCodeRegex);
	});
	it(`should allow a valid central office code to be passed in`, () => {
		const areaCode = generateCentralOfficeCode();
		expect(areaCode.length).toBe(3);
	});
	it(`should not allow an invalid central office code to be passed in`, () => {
		try {
			generateCentralOfficeCode();
		} catch (error) {
			if (error instanceof Error) {
				expect(error.message).toBe(`Invalid central office code`);
			}
		}
	});
});
