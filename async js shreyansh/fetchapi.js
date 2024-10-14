const axios = require('axios');

let random = () => {
    const api = 'https://jsonplaceholder.typicode.com/posts';
    
    axios.get(api)
    .then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    });
}

// Call the function
random();
