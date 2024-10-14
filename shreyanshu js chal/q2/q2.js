const url1 = document.querySelector('.img1')
const url2 = document.querySelector('.img2')

const btn = document.querySelector('.button')

btn.addEventListener('click', () => {
    // url1.src = 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    // url2.src = 'https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

    var v1 = url1.src;
    var v2 = url2.src;

    url1.src = v2;
    url2.src = v1;

});

