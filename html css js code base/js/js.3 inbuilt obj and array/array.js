let number = [1,2,3,4,5];
console.log(number[2]);
number.push(7);
console.log(number);
number.unshift(17);
console.log(number);
number.splice(5,0,'a','b');
console.log(number);
console.log(number.indexOf(4));
//    for exist or not

console.log(number.includes(5));
console.log(number.indexOf(6,4));