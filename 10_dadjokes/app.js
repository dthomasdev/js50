// FETCH API
const jokeEl  = document.getElementById('joke');
const newJoke = document.getElementById('joke-btn');


// generateJoke();

// function generateJoke(){
//   const url     = "https://icanhazdadjoke.com";
//   const config  = {
//     headers : {
//       "Accept" : "application/json"
//     }
//   }

//   fetch(url, config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerText = data.joke;
//     })
// }

// newJoke.addEventListener('click',generateJoke);


// ASYNC AWAIT

getJoke();

async function getJoke(){
  const url     = "https://icanhazdadjoke.com";
  const config  = {
    headers : {
      "Accept" : "application/json"
    }
  }
    
  const res = await fetch(url, config);
  const data = await res.json();

  jokeEl.innerText = data.joke;
}

newJoke.addEventListener('click', getJoke);