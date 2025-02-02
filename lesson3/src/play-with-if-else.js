const b1 = true;
const b2 = false;

if (b1 && b2) {
    ifFunc();
} else {
    elseFunc();
}

if (b1 && b2) {
    ifFunc();
} else if (b1 || b2) {
    console.log ('else if worked');
} else {
    elseFunc();
}

if (b1 && b2) {
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
