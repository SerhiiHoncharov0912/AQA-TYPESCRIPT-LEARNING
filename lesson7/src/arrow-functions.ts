const arraySum22 = (arr: string[] | number[]): string => {
    let sum = '';
    for (const item of arr) {
        sum += item;
    }
    return sum;
};

const arraySum23 = (arr: number[]) : number => {
    return arr.reduce((acc, item) => acc + item);
};

const arr22 = [1, 2, 3, 4, 5];
console.log(arraySum22(arr22));
console.log(arraySum23(arr22));
const arr23 = ['c', 'e', 'a', 'd', 'b'];
console.log(arraySum22(arr23));

