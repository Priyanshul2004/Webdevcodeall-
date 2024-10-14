const t1 = performance.now();
for(let i=0;i<=100;i++){
    let first = document.createElement('p');
    first.textContent = 'shail'+i;

    document.body.appendChild(first);
}
const t2 = performance.now();
console.log('time taken '+ (t2-t1)+'ms');