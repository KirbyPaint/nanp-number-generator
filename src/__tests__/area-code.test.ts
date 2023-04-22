import { generateAreaCode } from "../generate/area-code";

const areaCodeRegex = /^[2-9](\d)(?!\1)\d$/;

describe(`Area Code`, () => {
  it(`should generate a valid area code`, () => {
    const areaCode = generateAreaCode();
    expect(areaCode).toMatch(areaCodeRegex);
  });
  it(`should allow a valid area code to be passed in`, () => {
    const areaCode = generateAreaCode(`503`);
    expect(areaCode).toBe(`503`);
  });
  it(`should not allow an invalid area code to be passed in`, () => {
    try {
      generateAreaCode(`911`);
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe(`Invalid area code`);
      }
    }
  });
});
