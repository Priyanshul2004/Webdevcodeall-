function* fun3(params) {
    console.log("started");
    yield 1;
    console.log("1 startedd");
    yield 2;
    console.log("2 started ");
    yield 3;
    console.log("3 started");
}

let a = fun3()
console.log(a.next().value);
console.log(a.next().value);