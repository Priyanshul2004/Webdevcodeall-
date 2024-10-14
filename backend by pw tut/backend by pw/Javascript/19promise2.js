let fnd1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if((Math.random)>0.5){
            resolve("friend1 i am in for goa trip");
        }else{
            reject("friend1 i am not ready")
        }
    }, 3000);
})

let fnd2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if((Math.random)>0.5){
            resolve("friend2 i am in for goa trip");
        }else{
            reject(" friend2 i am suffring for fiver")
        }
    }, 3000);
})

let fnd3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if((Math.random)>0.5){
            resolve("friend3 i am in for goa trip");
        }else{
            reject("sorry friend3 i have a work")
        }
    }, 3000);
})

Promise.all([fnd1,fnd2,fnd3]).then((msg)=>{
    console.log(msg);
    console.log("we all going to goa ");
}).catch((msg)=>{
    console.log(msg);
    console.log("not going");
}).finally()