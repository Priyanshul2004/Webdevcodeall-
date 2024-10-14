// async function fun1(){
//     try {
//         const response = await fetch('https://api.github.com/users/Bard ')     
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("error find ");
//     }
// }
// fun1()

fetch('https://api.github.com/users/Bard')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))