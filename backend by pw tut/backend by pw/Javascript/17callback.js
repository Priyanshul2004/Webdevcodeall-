function greet(name,callback1){
    let name1 = "hello "+name
    callback1(name1)
}

function callfun(msg){
console.log(msg);
}

greet("sahil",callfun)