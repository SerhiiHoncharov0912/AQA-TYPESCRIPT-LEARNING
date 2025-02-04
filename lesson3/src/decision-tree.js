const b1 = true;
const b2 = false;
const a1 = 1;
const a2 = 2;
const a3 = 3;
const number = 1;

if (a2 == number) {
    ifFunc();
} else if (a3 == number) {
    elseIfFunc(1);
} else if (a1 == number) {
    elseIfFunc(2);
} else {
    elseFunc();
}

if (b1 && b2) {
    ifFunc();
} else {
    elseFunc();
}

if (a1 <= number) {
    ifFunc();
}
if (b1 || b2) {
    ifFunc();
}

b1 && b2 ? ifFunc() : elseFunc();

const a = -1;
const b = a > 0 ? 'positive' : 'negative';
console.log(b);

function ifFunc() {
    console.log('if function executed');
}

function elseFunc() {
    console.log('else function executed');
}

function elseIfFunc(number) {
    console.log(`else-if ${number} function executed`);
}
