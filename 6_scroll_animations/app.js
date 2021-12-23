const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', boxCheck);

boxCheck();

function boxCheck(){
 const triggerBottom = window.innerHeight * 0.8;

 boxes.forEach((box)=>{
   const boxTop = box.getBoundingClientRect().top;
   
   boxTop < triggerBottom ? box.classList.add('show') : box.classList.remove('show');
 })

};