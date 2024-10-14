function intrest(p,r,y){
    return p*r*y/100;
};
console.log(intrest(20000,15,3));

// dafult para

function int(p,r=5,y=10){
    return p*r*y/100;
};
console.log(int(20000));