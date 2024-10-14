const fruit = ["mango","apple","orange"]

// this is hard copy
// const myfruits = fruit


// this is shallow copy // not work on nexted object and array
myfruits = [...fruit]
myfruits.push("graps");
myfruits.push("dates")

console.log(myfruits);
console.log(fruit);


// deepcopy padhna hai 