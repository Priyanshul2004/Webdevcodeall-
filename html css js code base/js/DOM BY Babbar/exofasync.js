async function utility(){


let delhi = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("thodi thand bhai ");
    },6000);
});

let mumbai = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("thodi garmi bhai ");
    },6000);
});

let di =await delhi;
let mi =await mumbai;

return[di,mi];

}


// await ke liya tha ye wala example