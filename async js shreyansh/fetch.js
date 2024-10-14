const api = fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    })
    .catch((error) => console.log(error));

api;
