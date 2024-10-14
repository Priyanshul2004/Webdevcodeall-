function abc(a,b) {
    console.log(a);
    b();
}

abc(1,function() {
    console.log("this call back");
})