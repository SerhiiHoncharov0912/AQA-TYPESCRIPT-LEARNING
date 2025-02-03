const a1 = 1;
const a2 = 2;
const a3 = 3;
const number = 1;

switch (number) {
    case a1:
        printNumber(a1);
        break;
    case a2:
        printNumber(a2);
        break;
    case a3:
        printNumber(a3);
        break;
    default:
        printNumber('unknown');
        break;
}

function printNumber(number) {
    console.log(`Number is ${number}`);
}
