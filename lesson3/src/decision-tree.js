const b1 = true;
const b2 = false;
const a1 = 1;
const a2 = 2;
const a4 = 1;

if (b1 && b2) {
    ifFunc();
} else {
    elseFunc();
}

if (b1 && b2) {
    ifFunc();
} else if (a1 < a2) {
    elseIfFunc();
} else {
    elseFunc();
}

if (a1 <= a4) {
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
    console.log ('if function executed');
}

function elseFunc() {
    console.log ('else function executed');
}

function elseIfFunc() {
    console.log ('else-if function executed');
}
