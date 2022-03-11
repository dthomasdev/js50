const sounds = document.querySelectorAll('audio');
const buttons = [];

sounds.forEach((sound) => buttons.push(sound.id));

// buttons.forEach((button,idx) => {
//   document.getElementById('buttons').innerHTML += `<button>${button}</button>`
// })

buttons.forEach((button) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = button;

  
  btn.addEventListener('click', (e) => {
    stopPlay();
    document.getElementById(button).play();
  })

  document.getElementById('buttons').
  appendChild(btn);

})

function stopPlay(){
  buttons.forEach((button) => {
    document.getElementById(button).pause();
    document.getElementById(button).currentTime = 0;
  })
}