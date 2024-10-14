const user = {
    name:"priyanshul",
    "last-name":"tiwari",
    address:{
            state:"mp",
            city:"bopal"
    }
}

console.log(user.name);


console.log(user["last-name"]);
  
// addition on obj 

user.age = 12;
console.log(user);

user["king"] = "no"
console.log(user);

// output 

console.log(user.address.city);
console.log(user["address"]["state"]);

// delete 

// delete user.name
// console.log(user);

// seal 
//after seal we cant change but modified the component the value of object 
Object.seal(user)

// freez
Object.freeze(user)

// in keyword 
console.log('mobileno' in user);
console.log("last-name" in user);
