playWithVars();
playWithStrings();

function playWithStrings() {
    const string1 = "String1";
    const string2 = "    String2,    String2    ";

    console.log(string1.toUpperCase());
    console.log(string1.toLocaleUpperCase());
    console.log(string1.includes('1'));
    console.log(string1.includes('2'));
    console.log(string1.includes("String1"));
    console.log(string1.split('i'));
    console.log(string1.at(4).toUpperCase());
    console.log(string1.match(/[s1]/gi));
    console.log(string1.replace('r', 'aa'));

    console.log(string1.slice(1, 5));
    console.log(string1.slice(-3, 5));
    console.log(string1.slice(-4));
    console.log(string1.substring(1, 5));
    console.log(string1.substring(-1, 5));

    console.log(string2.trim(','));
}

function playWithVars() {
    const a = Number('1');
    const b = Number('a');

    console.log(a, b);

    const s1 = String(1);
    const s2 = String(true);
    const s3 = String(null);
    const s4 = String(undefined);
    const s5 = String({
        var1: 'value1',
        var2: 'value2'
    });
    const s6 = JSON.stringify({
        var1: 'value1',
        var2: 'value2'
    });
    console.log(s1, s2, s3, s4, s5, s6);

    const c1 = a + s1;
    console.log(c1);
}
