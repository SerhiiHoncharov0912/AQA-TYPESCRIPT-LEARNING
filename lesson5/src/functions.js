function arraySum(arr) {
    let sum = '';
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function arraySum2(arr) {
    return arr.reduce((acc, item) => acc + item);
}

const arr = [1, 2, 3, 4, 5];
console.log(arraySum(arr));
console.log(arraySum2(arr));
const arr2 = ['c', 'e', 'a', 'd', 'b'];
console.log(arraySum(arr2));
console.log(arraySum2(arr2));
