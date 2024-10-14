// let meraprom = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('mil jye ga ');
//     },4000);
//     resolve(3434);
// });


let meraprom = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('mil jye ga ');
    },4000);
    reject(new error('nhi mil pyew ga bhai'))
});