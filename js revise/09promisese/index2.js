// const promo = new Promise((resolve, reject) => {
//     let error = true
//     if (!true) {
//         console.log(" this is rigght in if condition ");
//         resolve({Name:"priyanshul",clg:"rits"})
//     }else{
//         reject("this is rong in this if condition ");
//     }
// })

// promo
// .then((user)=>{
//     console.log(user.Name);
// })
// .then((Name)=>{
//     console.log(Name)
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{console.log("this promo is worked successfully");})


const promo2 = new Promise((resolve, reject) => {
    let error = true;
    if (!error) {
        console.log("this is right in if condition");
        resolve({ Name: "priyanshul", clg: "rits" });
    } else {
        reject("this is wrong in this if condition");
    }
});

async function asynfun() {
    try {
        const response = await promo2;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

asynfun();
