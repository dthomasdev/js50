const tagArea = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus();

textArea.addEventListener('keyup', (e)=>{
  createTags(e.target.value);
  
  if(e.key.toLowerCase() === 'enter'){
    setTimeout(()=>{
      e.target.value = "";
    },20)
   
    randomization();
  }
})

function createTags(input){
  const tags = input.split(',').filter(tag => tag.trim() !== "").map((tag) => tag.trim());

  tagArea.innerHTML = '';

  tags.forEach((tag) => {
    const newTag = document.createElement('span');
    newTag.classList.add('tag');
    newTag.innerText = tag;
    tagArea.appendChild(newTag);
    // tagArea.innerHTML += `<span class="tag">${tag}</span>` //using template literals
  });
}


function randomization(){
  textArea.disabled = true;
  const times = 30;

  const interval = setInterval(()=>{
    const randomTag = pickTag();
    highlightTag(randomTag);
    setTimeout(()=>{
      unHighlightTag(randomTag);
    }, 100)
  }, 100);

  setTimeout(()=>{
    clearInterval(interval);
    
    setTimeout(()=>{
      const randomTag = pickTag();
      highlightTag(randomTag);
      textArea.disabled = false
    }, 100)
  }, times*100);
}

function pickTag(){
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random()*tags.length)];
}

function highlightTag(tag){
  tag.classList.add('highlight');
}

function unHighlightTag(tag){
  tag.classList.remove('highlight');
}
