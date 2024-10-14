var im1 = document.querySelector('.img1');
var im2 = document.querySelector('.img2');



document.querySelector('button')
.addEventListener('click' , function(){

 var image1 = im1.src;
 var image2 = im2.src;

 im1.src = image2;
 im2.src = image1;

})