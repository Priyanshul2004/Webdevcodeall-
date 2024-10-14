var h1 = document.querySelector('#hlo')
// var name1 = prompt();
// h1.textContent += name1
var change = document.querySelector('.hlo')
change.style.color = 'red';

var btn = document.querySelector('.button')
btn.addEventListener('click',()=>{
    btn.textContent = "starting"
    btn.style.backgroundColor = 'red'
    btn.style.width = '100px'
    console.log("hello ji");
})
// textcontant and innerhtml
// classlist