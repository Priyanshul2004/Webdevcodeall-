let add = (a,b)=>{
     let c = a+b
     return c
}


let pro = (d,c)=>{
     return d*c
}


console.log(add);

module.exports = {
     add:add,
     pro:pro
}



// it can also export this type 

// exports.let add = (a,b)=>{
//      let c = a+b
//      return c
// }


// exports.let pro = (d,c)=>{
//      return d*c
// }


// console.log(add);