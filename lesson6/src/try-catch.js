async function requestToService(service1, service2) {
    try {
        const response = await fetch(service1);
        console.log(response.status);
    } catch (error) {
        console.log(`Failed: ${error.message}`);

        const response = await fetch(service2);

        console.log(response);

        if (!response.ok) {
            throw new Error('My own error');
        }
    }
}

requestToService('https://qwe.ninja/docs/api-docs.json', 'https://jsonplaceholder.typicode.com/posts');
