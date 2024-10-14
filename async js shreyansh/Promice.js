new Promise((res, rej) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((raw)=>raw.json())
    .then((result)=>{
        if (result.find(post => post.id === 2)) res()
        else rej()
    })
})