const complete = document.querySelector('.link-container').childElementCount;

document.getElementById('count').innerText = complete;
document.getElementById('count-left').innerText = 50 - complete;