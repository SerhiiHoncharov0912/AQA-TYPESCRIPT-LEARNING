async function requestToService(service1, service2) {
    try {
        const response = await fetch(service1);
        console.log(response.status);
    } catch {
        try {
            const response = await fetch(service2);
            console.log(response.status);
        } catch {
            throw new Error('My own error');
        }
    }
}

requestToService('https://qwe.ninja/docs/api-docs.json', 'https://catfact.ninja/docs/api-docs.json');
