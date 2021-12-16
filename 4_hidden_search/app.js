const search = document.querySelector('.search');
const searchBtn = document.querySelector('.btn');
const searchInput = document.querySelector('.search .input');

searchBtn.addEventListener('click', ()=>{
  search.classList.toggle('active');
  searchInput.focus();
})