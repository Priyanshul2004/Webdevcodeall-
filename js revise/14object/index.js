const dec = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(dec);

const first = {
    name: "sahil",
    class:"second year",
    clg: "rits"
}

// console.log(Object.getOwnPropertyDescriptor(first,"name"));

Object.defineProperty(first,"name",{
    configurable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(first,"name"));