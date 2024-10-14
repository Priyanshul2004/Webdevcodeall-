function mul(a,b=1){
    console.log(a*b);
}

mul(2)

//m b is called default parameter 


// spread operator 
// also used in object in js 
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const obj3 = {...obj1}
console.log(obj3);


// rest parameters 
// iske help se ham jitne chahe uitne parameter de sakte hai 

function add(...nums){
    console.log(nums);
    let sum = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
        sum = sum+nums[i]
    }
    console.log(sum);
    return sum
}

add(3,4,5,6,6)