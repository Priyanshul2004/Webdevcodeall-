let promo1 = new Promise((resolve, reject) => {
    let parentper = true
    if(parentper){
        resolve("papa maan gye")
    }else{
        reject("papa nhi mane yarr")
    }
})

promo1.then((msg)=>{
console.log("yes maan gye yaar: ",msg);
}).catch((msg)=>{
console.log("tinde kaha ho yaar :",msg);
}).finally(console.log("chalo life me clarity mile"))