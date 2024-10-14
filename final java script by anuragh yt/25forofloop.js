const fruits = ["apple","banana","peach","mango"]

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);  
// }

// for of loop 

for(var a of fruits){
    console.log(a);
}

// object me itrate ke liye for in loop ka use krte hai 

const person = {
    p1:"sahil",
    p2:"tiwari"
}

for(a in person){
    console.log(person[a]);
}