playWithVars();

function playWithVars() {
    const string1 = 'String1';
    const string2 = '33';
    const number1 = 11;
    const bigInt1 = 123n;
    const bool1 = true;
    const nullVar1 = null;
    const undef1 = undefined;
    const s5 = String(null);
    const s7 = String(undefined);
    const onjString1 = JSON.stringify({
        var1: 'value1',
        var2: 'value2'
    });

    console.log(string1 + string2, '------- string1 + string2');
    console.log(string1 - nullVar1, '------- string1 - nullVar1');
    console.log(string1 + bool1, '------- string1 + bool1');
    console.log(Number(bigInt1) + number1, '------- Number(bigInt1) + number1');
    console.log(bigInt1 + string2, '------- bigInt1 + string2');
    console.log(Number(bigInt1) + undef1, '------- Number(bigInt1) + undef1');
    console.log(number1 + bool1, '------- number1 + bool1');
    console.log(s5 + bool1, '------- s5 + bool1');
    console.log(onjString1 + s7, '------- onjString1 + s7');
    console.log(number1 + string2, '------- number1 + string2');
}
