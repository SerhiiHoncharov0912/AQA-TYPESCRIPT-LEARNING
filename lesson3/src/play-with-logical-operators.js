const a = true;
const b = false;

console.log(a && b);
console.log(a || b);
console.log(!a);

const c = null;
const d = null;

const e = c ?? d ?? returnString();

console.log(e);

function returnString() {
    return 'string';
}
