printAll();

function printAll() {
    consoleLogString(`bla bla bla`);
    console.log(returnObj());
    playWithVars();
}

function playWithVars() {
    const a = 6;
    const b = '3';
    let c = a + b;
    c = a;
    const un = undefined;
    console.log(c, un, a + b);
}

function consoleLogString(str) {
    console.log(`String is ${str}`);
}

function returnObj() {
    const obj = {
        name: 'Robot',
        lastName: 'Dreams'
    };
    return obj;
}
