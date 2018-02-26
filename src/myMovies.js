/* global fetch */
const myMovies = () => fetch('/api/movies').then(response => response.json());

myMovies().then(movies => {
  for (let i = 0; i < movies.length; i++) {
    document.getElementById('myMovies').innerHTML += `<div class='movieTitle'><p>${movies[i].title}</p><button id=${movies[i].title}>x</button></div>`;
  }
});

const formElement = document.querySelector('form');
const formData = new FormData(formElement);
const object = {};
formData.forEach((value, key) => {
  object[key] = value;
});

const json = JSON.stringify(object);

export default myMovies;
