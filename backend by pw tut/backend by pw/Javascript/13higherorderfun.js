function fun1(fun2,a,b){
     return fun2(a,b)
}


function fun3(a,b){
    return a+b
}


let result = fun1(fun3,2,3)
console.log(result);