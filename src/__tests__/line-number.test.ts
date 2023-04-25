import { describe, expect, it } from "vitest";
import { generateLineNumber } from "../generate/line-number";

describe(`Line number`, () => {
	it(`should generate a valid line number`, () => {
		const lineNumber = generateLineNumber();
		expect(lineNumber.length).toBe(4);
	});
});
