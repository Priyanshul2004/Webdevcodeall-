// callback and higher order function

// this is the example  of higher order function 
function a(b){
    console.log(b);
    b()
}

function x(){
    console.log('Hiiiiii');
}

// a(x)


// this is called as anonomous function and the function under 
// the a function call this is called as callback function
a(function (){
   console.log("hellow");
})


