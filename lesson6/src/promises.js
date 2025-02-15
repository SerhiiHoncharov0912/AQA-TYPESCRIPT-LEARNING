function getJson() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            return response.json();
        })
        .then((json) => processResponse(json))
        .catch((e) => console.log('error:', e));
}

function processResponse(json) {
    console.log(json[1]);
}

(async () => {
    await getJson();
})();
