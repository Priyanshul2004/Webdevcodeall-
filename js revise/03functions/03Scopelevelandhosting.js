// it can access


console.log(fun(7))
function fun(num){
    return num+1
}



// cant access 

console.log(fun2(3))
let fun2 = function fun(num){
    return num+1
}
