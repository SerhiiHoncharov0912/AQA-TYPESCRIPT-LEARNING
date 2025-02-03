const string = 'String1';
const numberOne = 1;
const bigInt = 123n;
const nullVar = null;
const undef = undefined;
const s5 = String(null);
const boolTrue = true;
const boolFalse = false;

console.log(boolTrue && string, '------------ boolTrue && string');
console.log(boolTrue || string, '------------ boolTrue || string');
console.log(!string, '------------ !string');
console.log(numberOne && boolFalse, '------------ numberOne && boolFalse');
console.log(numberOne || boolFalse, '------------ numberOne || boolFalse');
console.log(Boolean(numberOne) || boolFalse, '------------ Boolean(numberOne) || boolFalse');
console.log(undef && boolTrue, '------------ undef && boolTrue');
console.log(undef || boolTrue, '------------ undef || boolTrue');
console.log(bigInt && boolTrue, '------------ bigInt && boolTrue');
console.log(bigInt || boolTrue, '------------ bigInt || boolTrue');
console.log(nullVar && boolTrue, '------------ nullVar && boolTrue');
console.log(nullVar || boolTrue, '------------ nullVar || boolTrue');
console.log(nullVar && boolFalse, '------------ nullVar && boolFalse');
console.log(nullVar || boolFalse, '------------ nullVar || boolFalse');
console.log(nullVar && string, '------------ nullVar && string');
console.log(nullVar || string, '------------ nullVar || string');
console.log(nullVar && numberOne, '------------ nullVar && numberOne');
console.log(nullVar || numberOne, '------------ nullVar || numberOne');
console.log(nullVar && bigInt, '------------ nullVar && bigInt');
console.log(nullVar || bigInt, '------------ nullVar || bigInt');
console.log(nullVar && undef, '------------ nullVar && undef');
console.log(nullVar || undef, '------------ nullVar || undef');
console.log(nullVar && s5, '------------ nullVar && s5');
console.log(nullVar || s5, '------------ nullVar || s5');

const c = null;
const d = null;

const e = c ?? d ?? returnString();

console.log(e);

function returnString() {
    return 'string';
}
