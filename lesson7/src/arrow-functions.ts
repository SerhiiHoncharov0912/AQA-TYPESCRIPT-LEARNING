const arraySum = (arr: string[] | number[]): unknown => {
    let sum = '';
    for (const item of arr) {
        sum += item;
    }
    return sum;
};

const arraySum2 = (arr: number[]) : number => {
    return arr.reduce((acc, item) => acc + item);
};

const arr = [1, 2, 3, 4, 5];
console.log(arraySum(arr));
console.log(arraySum2(arr));
const arr2 = ['c', 'e', 'a', 'd', 'b'];
console.log(arraySum(arr2));

