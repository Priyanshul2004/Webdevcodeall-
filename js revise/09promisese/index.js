const promo = new Promise((resolve, reject) => {
   setTimeout(function(){
    console.log("promo is working ")
    resolve()
   },6000)
})

promo.then(function(){
    console.log("yes it is working ");
})

new Promise((resolve, reject) => {
    setTimeout(function(){
       console.log("second is working");
       resolve()
    },5000)
}).then(function(){
    console.log("yes second is working ");
})


const promothree = new Promise((resolve, reject) => {
    setTimeout(function(){
        console.log("this is thired promo");
        resolve({name:"priyanshul",clg:"rits"})
    })
},3000)

promothree.then(function(clg){
    console.log(clg);
})