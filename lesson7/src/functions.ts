function arraySumFunc(arr: string[] | number[]) : string {
    let sum = '';
    for (const item of arr) {
        sum += item;
    }
    return sum;
}

function arraySumFunc2(arr: number[]): number {
    let sum = 0;
    for (const item of arr) {
        sum += item;
    }
    return sum;
}

const numberArr: number[] = [1, 2, 3, 4, 5];
console.log(arraySumFunc(numberArr));
console.log(arraySumFunc2(numberArr));
const stringArr: string[] = ['c', 'e', 'a', 'd', 'b'];
console.log(arraySumFunc(stringArr));
