let myLink = 'https://api.chucknorris.io/jokes/random';
let jokeH2 = document.querySelector('h2'),
    btn = document.querySelector('input');


    window.addEventListener('load',async function myJoke () {
    let joke =await (await fetch(myLink)).json();
    let norris = joke.value
    jokeH2.innerHTML = norris
    
} )    
btn.addEventListener('click',async function myJoke () {
    let joke =await (await fetch(myLink)).json();
    let norris = joke.value
    jokeH2.innerHTML = norris
    
}
);