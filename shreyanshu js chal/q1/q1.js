const x = document.querySelector('.btn')
const y = document.querySelector('.hlo')
const yourname = prompt("yourn name")

x.addEventListener('click',()=>{
    x.textContent = 'working';
    y.textContent += yourname
})