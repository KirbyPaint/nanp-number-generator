# nanp-number-generator

The North American Numbering Plan (NANP) is a telephone numbering plan for twenty-five regions in twenty countries, primarily in North America and the Caribbean. Phone numbers are formatted like so: (NXX)-NXX-XXXX where N is any digit 2 through 9, and X is any digit 0 through 9.  

This can cause issues when generating random phone numbers, as some numbers are invalid. This library's purpose is to generate only valid NANP numbers.

## Installation

```bash
npm install nanp-number-generator

# or
yarn add nanp-number-generator
```

## Usage

```javascript
import { generateNANPNumber } from "nanp-number-generator";

const number = generateNANPNumber();

function show() {
  console.log(number);
}

show();
```
