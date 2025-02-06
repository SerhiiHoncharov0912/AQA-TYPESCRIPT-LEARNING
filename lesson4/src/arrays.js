const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['c', 'e', 'a', 'd', 'b'];
const arr3 = [true, false, true, false, true];
const arr4 = [1, 'a', true, 2, 'b', false, 3, 'c', true, 4, 'd', false, 5, 'e', true];

console.log('-----------------------------------');
const arr5 = arr2.map((i) => {
    if (i != 'c' && i != 'd') {
        return i;
    }
});

arr5.forEach((i) => {
    if (i || i == 0) {
        console.log(i);
    }
});

arr3.sort();
console.log(arr3);

arr3.sort((a, b) => b - a);
console.log(arr3);

arr3.sort((a, b) => a - b);
console.log(arr3);

arr2.sort();
console.log(arr2);

arr2.sort((a, b) => b.localeCompare(a));
console.log(arr2);

arr4.sort().forEach(i => console.log(i));

arr4.sort((a, b) => {
    if (typeof a === typeof b) {
        return 0;
    }
    return typeof a > typeof b ? 1 : -1;
});
console.log(arr4);

console.log("-----------------------------------");
const arr6 = [1, 'a', true, 2, 'b', false, 3, 'a', true, 4, 'd', false, 5, 'a', true];
arr6.sort((a) => {
    if (a === 'a'){
        return -1;
    }
    return 1;
});
console.log(arr6);
