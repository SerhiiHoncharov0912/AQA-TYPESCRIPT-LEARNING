function getJson() {
    return fetch('https://catfact.ninja/docs/api-docs.json')
        .then((response) => {
            return response.json();
        })
        .then((json) => processResponse(json))
        .catch((e) => console.log('error:', e));
}

function processResponse(json) {
    console.log(json.info);
}

getJson();
