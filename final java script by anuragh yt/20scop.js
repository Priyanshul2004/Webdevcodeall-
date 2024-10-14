// this is global scope
const username = 'priyanshul'

function add(){
    // x is in the local scope 
    const x = 10;
    const y = 10;
    console.log(x+y);
    
}

// we cannot access the x because it is in the local scope 
// console.log(x);

// username access because of global fun
console.log(username);
add()

// lexical scope and  block scope 
function newf(){
   const a = 2;
   const b = 4;
   const c = 6;

   function key1() {
    console.log("hello ji");
    console.log(c);   // this is closer
    // lixicel scope ki defination likhna hai 
    //or lixical scope vo hota hai jise key1 ka lixical scope 
    // useke upar ke sabhi ho ge

    //block scope 
    // this is the example of block scope 
    // {
    //     var w = 2;
    //     const r = 3;
    //     let u = 5 ;
    // }

    // console.log(w);
    // console.log(r);
    // console.log(u);

   }

   key1()
}

// jab ham kisis inner function me outer function ke vari
//able ko use krte hai tab wo eak closer bana leta hai is called
//closer

newf()