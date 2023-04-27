import { describe, expect, it } from "vitest";

import { generateNANPNumber } from "../generate/nanp-number";
import { validateAreaCode } from "../validate/area-code";
import { validateCentralOfficeCode } from "../validate/central-office-code";
import { validateLineNumber } from "../validate/line-number";

describe(`Area Code`, () => {
	it(`should generate a valid NANP number`, () => {
		const number = generateNANPNumber({});
		expect(number).toBeDefined();
		const areaCode = number.slice(0, 3);
		const centralOfficeCode = number.slice(3, 6);
		const lineNumber = number.slice(6, 10);
		expect(validateAreaCode(areaCode)).toBe(true);
		expect(validateCentralOfficeCode(centralOfficeCode)).toBe(true);
		expect(validateLineNumber(lineNumber)).toBe(true);
	});
	it(`should generate a normal valid NANP number with custom options`, () => {
		const number = generateNANPNumber({
			areaCode: `503`,
			centralOfficeCode: `737`,
			lineNumber: `9999`,
		});
		expect(number).toBeDefined();
		expect(number).toBe(`5037379999`);
	});
	it(`should generate a valid fictionalized NANP number`, () => {
		const number = generateNANPNumber({
			fictionalize: true,
		});
		expect(number).toBeDefined();
		const areaCode = number.slice(0, 3);
		const centralOfficeCode = number.slice(3, 6);
		const lineNumber = number.slice(6, 10);
		expect(validateAreaCode(areaCode)).toBe(true);
		expect(centralOfficeCode).toBe(`555`);
		expect(parseInt(lineNumber)).toBeGreaterThanOrEqual(100);
		expect(parseInt(lineNumber)).toBeLessThanOrEqual(199);
	});
});
