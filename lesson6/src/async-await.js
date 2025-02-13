async function getJson() {
    const response = await fetch('https://catfact.ninja/docs/api-docs.json');
    const json = await response.json();
    processResponse(json);
}

function processResponse(json) {
    console.log(json.info);
}

getJson();
