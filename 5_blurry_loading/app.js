const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 35);

function blurring(){
  load++

  load > 99 && clearInterval(int);

  loadText.innerText = `${load}%`;
  loadText.style.opacity =  1 - (load / 100);
  bg.style.filter = `blur(${30-((load / 100)*30)}px)`;
}