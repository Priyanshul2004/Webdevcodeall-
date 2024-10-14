function f1(){
    let a = 15
    function babyfun() {
        console.log(a);
        let b = 4
        console.log("the value of b is ",b);
    }
    return babyfun()
}

