let i = 0;
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i; i < 10; i++) {
    console.log(i);
}

console.log('-----------------------------------1');
for (const i of arr) {
    console.log(i);
}

console.log('-----------------------------------2');
i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

console.log('-----------------------------------3');
i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);

console.log('-----------------------------------4');
arr.forEach(i => console.log(i));

console.log('-----------------------------------5');
arr.map(i => console.log(i));

console.log('---------------------------------------------------------------------------------------------------------');
i = 100;

for (i; i >= 0; i-=10) {
    console.log(i);
}

console.log('-----------------------------------1');

i = 100;
while (i >= 0) {
    console.log(i);
    i-=10;
}

console.log('-----------------------------------3');
i = 100;
do {
    console.log(i);
    i-=10;
} while (i >= 0);

console.log('-----------------------------------4');
const arr2 = [];
for (let i = 0; i <= 100; i++) {
    arr2.push(i);
}

arr2.sort((a, b) => b - a).forEach(i => {
    i % 10 === 0 ? console.log(i) : null;
});

console.log('-----------------------------------5');
const arr3 = arr2.map(i => {
    if (i % 10 == 0) {
        return i;
    }
});
arr3.forEach(i => {
    if(i || i == 0) {
        console.log(i);
    }
});
