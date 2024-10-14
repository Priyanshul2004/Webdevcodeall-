var obj = {name:"shail"};
function abc(){
    console.log(this);
};
abc.call(obj); 