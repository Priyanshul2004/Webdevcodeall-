function add(a,b){
    return a+b;
};
add(2,5);

// by loop 

function sum(a,b){
    let total = 0 ;
    for( let value of arguments)
    total = total + value;
    return total;
};
let ans = sum(1,6);
console.log(ans);