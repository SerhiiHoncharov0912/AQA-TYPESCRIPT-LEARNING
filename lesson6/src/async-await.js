async function getJson() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await response.json();
    processResponse(json);
}

function processResponse(json) {
    console.log(json[0]);
}

(async () => {
    await getJson();
})();

