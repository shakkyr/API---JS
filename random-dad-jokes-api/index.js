const jokeEl = document.querySelector('#joke'),
    get_joke = document.querySelector('#get_joke');


get_joke.addEventListener('click',async function generateJoke() {
      const jokeRes = await fetch('https://icanhazdadjoke.com/', {
          headers: {
              'Accept': 'application/json'
          }
    });                
       const joke = await jokeRes.json();     
       console.log(joke);
       //set new joke
       jokeEl.innerHTML = joke.joke
       
})