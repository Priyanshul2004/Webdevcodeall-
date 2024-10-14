// use script 






// variable 

// Variable naming
// There are two limitations on variable names in JavaScript:
// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.

// let a = 10;
// b=20
// c=30
// let $ = 2;





// data type 

// let str = "sahil";
// const a = 10 ;
// a = 12;  // not possible 
// console.log(a);
// var b = 2;
// b = 3;
// console.log(b);





// alert // prompt //conform 


// let isboss = confirm("he is the boss");
// alert(isboss)






// type of

// const a = 123;
// console.log(typeof(a));
// let b = "123";
// let c = Number(b);
// console.log(typeof(c));





//operator 
//+_*/ other

//Nullish coalescing operator '??' padhna hai 

// let a ;
// console.log(a ?? "priyanshul");
// let b = 3;
// console.log(b ?? "no");


// some methods 

// const name1 = "priyanshul"
// console.log(name1.length);
// console.log(name1.charAt(5));
// console.log(name1.search('p'));


// math fun or obj padhna hai 






// switch case 

// let a = 5 ;
// switch (a) {
//     case 3:
//         console.log("this is the value");
//         break;

//     case 4:
//         console.log("this is the value in case 2");
//             break;

//     default:
//         console.log("value not found");
//         break;
// }









// function 


// function add(a,b=2){  // here b+2 is default paramater 
//     console.log(a+b);
// }
// add(3)

// global variable and local variable 

// const wel = "Nameste" // this is global variable 

// function intro(){
//     let name = "sahil" // this is local variable 
//     console.log(wel,name);
// }

// intro()







// call back function 


//A callback function is a function that is passed as an argument to another 
//function and is executed after some operation has been completed

// function welcome(name,callback){
//     console.log(name+" welcome");
//     callback()
// }

// function add(){
//     console.log("in our program ");
// }

// welcome('sahil',add);






//  arrow function 

// arrow function with explict and implict return 
// let arrow = (a,b)=>{
//       return a+b;        // this is explict return 
// }
// console.log(arrow(2,3));
// let errow = (a,b)=> a+b;
// console.log(errow(2,3));    // this is function with implict return 






// Transpilers and  “polyfill”.
//A script that updates/adds new functions is called “polyfill”. 
//It “fills in” the gap and adds missing implementations.

// A transpiler is a special piece of software that translates source
// code to another source code. It can parse (“read and understand”) modern 
//code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines.
// E.g. JavaScript before year 2020 didn’t have the “nullish coalescing operator” ??. So,
// if a visitor uses an outdated browser, it may fail to understand the code like height = height ?? 100.
// A transpiler would analyze our code and rewrite height ?? 100 into (height !== undefined && height !== null) ? height : 100.







//object  
//object constructor 
// const info = new Object() 

//object literal and tere properties 
// let person = {
//     name:"priyanshul",
//     age:21,
//     "like birds" : "Yes"
// }
//some opt
// console.log(person.age);
// person.isadmin = true;
// console.log("name" in person);       // in property in object  
// delete person.age;
// console.log(person["like birds"]);
// person["respected name "] = "bholu bhai"
// console.log(person);







//Object references and copying
// let person = {
//     name:"priyanshul",
//     age:20
// }
// differ in copy by referance 
// let second = person;
// console.log(second.age);
// second.college = "Rits"
// console.log(person.college);
// imp thing Const objects can be modified
//Cloning and merging , Object.assign padhna hai 
// merzing the object by using spread operator

// let obj1 = {
//     a:10,
//     b:20,
//     c:30
// }
// let obj2 = {
//     a:50,
//     d:39
// }
// let obj3 = {...obj1,...obj2}
// console.log(obj3);






// method in obj 
// let a = {
//     name:"priyanshul"
// }
// a.age = function(){
//     alert("hellow")
// }

// a.age()   // also consist much more methods 






// this in obj explaenation
// let name1 = "priyanshul";
// let obj = {
//     name1:"sahil",
//     age:20,

//     sayhi(){
//         alert(name1)    // this is problem line 
//         alert(this.name1) // or use 
//         alert(obj.name1)
//     }

// }

// obj.sayhi()







// new constructor in obj 

// function hellow(name){
//        this.name = name;
//        this.admin = false;
// }

// let Hellow = new hellow("sahil");

// alert(Hellow.name);
// alert(Hellow.admin);
//constructor padhna hai baad me 






//optional chaning 
// let a = {
//     age:20
// }
// alert(a.name ? a.name : "not found");
// alert(a.age ? a.age : "not found");



// Object to primitive conversion padhna hai 




// some primitive method 
// let a = "Priyanshul";
// console.log(a.toLowerCase());
// console.log(a.toUpperCase());
// console.log(a.length);
// let b = 2.236736373;
// console.log(b.toFixed(3));
//math func bhe padhna hai 






//string
// let a = "priyanshul"
// console.log(a.length);
// console.log();





//Array and some method of array - array ki method ko baad me padhna hai 
// kuch abhi padh luga 
// push pop , length , concate , index of , includes , sort , revwrse , map
// let arr = [6,4,5,3,2,1];
// let arr2 = [74,3,22,22]
// console.log(arr.pop());
// console.log(arr.push(9));
// console.log(arr.length);
// console.log(arr.concat(arr2));
// console.log(arr.indexOf(5));
// console.log(arr.includes(66));
// console.log(arr.sort());
// console.log(arr.reverse());





// map and set ko apdhna hai 



// some another object methods 
// let person = {
//     name1:"priyanshul",
//     surname:"tiwari",
//     age:20
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));







// destructuring 
// in array 
// let arr = ["priyanshul","tiwari"];
// let [name1,surname] = arr;

// console.log(surname);
// console.log(name1);

//object destructuring 
// let obj = {
//     name1:"priyanshul",
//     surname:"name",
//     age:20
// }

// let {name1,surname,age} = obj;
// console.log(name1);
// console.log(surname);
// console.log(age);
// smart function parameter 
// function ans(a=2,b=3,c=4){
//        console.log(a+b+c);
// }
// ans()





// Date 
// let date = new Date()  // for today
// console.log(date);
// console.log(Date.now());







//json   padna hai baad me  // iski or bhe methods ko padhna hai 
// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.
// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     spouse: null
// };
// let json = JSON.stringify(student)
// console.log(json);






//rest parameter 
// function person(name,surname,...age){
//    console.log(name);
//    console.log(surname);
//    console.log(age);
//    console.log(age.length);
// }

// person("priyanshu","tiwari",23,22,44,545)
// math.max
// let arry = [3,2,1,4,5];
// console.log(Math.max(...arry));








// { } this is block scope 
// garbage collector in js  alos lern 
// lexical scope 
// jab fun ke fun declare hote hai or unme sub se niche wale ko lexical scope kehte hai 
//closer 
// kis fun ke andar ke fun ke andar ke var ko access krne ko he closer kehte hai 
// function arr() {
//     function arr2() {
//       let b = 4;
//       console.log(b);
//     }
//     return arr2; 
// }
// const closer = arr(); 
// closer();
//immediately-invoked function expressions   iife
// var is global veriable 





// function with new keyword 
// let fun = new Function('a','b','return a+b')
// console.log(fun(1,2));





//settimeout and setinterval
// const settime = setTimeout(()=>{
//  console.log("hello ji ");
// },3000)

// const setint = setInterval(()=>{
//   console.log("hello bhai");
// },2000)




//  Decorators and forwarding, call/apply padhna pade ga 




// this losing problem 
// let obj1 = {
//     firstname : "priyanshul",
//     fun2(){
//         console.log(`hellow ${this.firstname}`);
//     }
// }

// const c = setTimeout(obj1.fun2)
//solution of this problem                                             by wrapper 
// const c = setTimeout(()=>{
//     obj1.fun2();
// },1000)
//solution2 by                                                          bind method 
// let obj1 = {
//     firstname : "priyanshul"
// }

// function fun2(){
//     console.log(this.firstname);
// }

// const ans = fun2.bind(obj1);
// ans()





// partial function in js padhna hai 






//gatters and setters 
// class User{
//     constructor(email,password){
//         this.email = email;
//         this.password = password
//     }

//     get password(){
//         return `${this._password}tiwariji`
//     }

//     set password(value){
//         this._password = value;
//     }

// }

// const priyansul = new User("priyanshu@tiwari","Priyanshul");
// console.log(priyansul.password);







// proto type in heritance se padhna hai 
