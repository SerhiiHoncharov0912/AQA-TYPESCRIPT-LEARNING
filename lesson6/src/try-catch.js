try {
    await fetch('https://qwe.ninja/docs/api-docs.json');
} catch (e){
    console.log('-------------------------------------');
    console.log(e.message);
}
