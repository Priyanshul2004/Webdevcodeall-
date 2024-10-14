var form =  document.querySelector("form");
var inp1 = document.querySelector("#inp1")
var inp2 = document.querySelector("#inp2")
var h4 =  document.querySelector("h4");

form.addEventListener("submit",function(event){
         event.preventDefault();
         if(inp1.value === ''|| inp2.value === ''){
           h4.textContent = 'dabba khali hai yaar';
           h4.style.color = 'red';
         }
         else{
            h4.textContent = '';
         }
}) 