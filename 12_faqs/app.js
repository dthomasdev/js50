const buttons = document.querySelectorAll('.faq_toggle');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    clearActive(button);
    button.parentNode.classList.toggle('active');
  })
})

function clearActive(active){
  buttons.forEach((button)=> {
  if(button != active){ button.parentNode.classList.remove('active')};
  })  
}