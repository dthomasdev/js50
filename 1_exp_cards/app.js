const panels = document.querySelectorAll('.panel'); //returns a NodeList

panels.forEach( (panel, i) =>{
  panel.addEventListener('click', ()=>{
    removeActiveClasses()
    bodyBackground()
    panel.classList.add('active');
  })
})

function removeActiveClasses(){
  panels.forEach(panel =>{
    panel.classList.remove('active');
  })
}


function bodyBackground(){
  const colour = Math.floor(Math.random()*16777215).toString(16);

  document.body.style.backgroundColor = "#" + colour;
}
