const inp1 = document.querySelector('.txt1');
const inp2 = document.querySelector('.txt2');
const form = document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(inp1.value);

    if (inp1.value == "") {
        console.log("enter your name");        
    }else{
        console.log(inp1.value);
    }
})