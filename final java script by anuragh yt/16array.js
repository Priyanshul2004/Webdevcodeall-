const fruit = ["apple","banana","graps",23,{}]
console.log(fruit[0]);

// chnaging new value

fruit[0] = "king"
console.log(fruit[0]);
console.log(fruit[4]);

// .length
console.log(fruit.length);

// logical quest // and add the value 

fruit[10] = "index10"
console.log(fruit.length);

// add the value in last idx  whe index in not know 
fruit[fruit.length] = "hellow ji"
console.log(fruit.length);

// push
fruit.push("newval")
console.log(fruit.length);

console.log(fruit);

// remove element from array ? by pop
fruit.pop();
console.log(fruit.length);

// fill the key value in the array
const newarr = []
newarr.name = "sahil"
console.log(newarr);


// some array method 
// shift() and unshift
const arr = [1,2,3,4,8,5]
arr.shift()
console.log(arr);
arr.unshift(4)
console.log(arr);


// concat()
const f1 = ["sahil","tiwari"]
const f2 = [1,2,3]
console.log(f1.concat(f2));

// indexof
console.log(f2.indexOf(2));

// includes
console.log(f2.includes(3));

//reverse
console.log(f2.reverse());

//sort
console.log(f2.sort());
console.log(f1.sort()); // sort in alphabatical order

//slice it cannot change the orignal array
const arr6 = [1,2,3,4,5,6,7,8,9]
console.log(arr6.slice(4));
console.log(arr6.slice(1,4));

//splice  same as but it can permentaly delete 
console.log(arr6.splice(1,5));

