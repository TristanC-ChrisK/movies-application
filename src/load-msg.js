const myMovies = () => fetch('/api/movies').then(response => response.json());

myMovies().then(movies => {
  for (let i = 0; i < movies.length; i++) {
    document.getElementById('myMovies').innerHTML += `<div class='movieTitle'>${movies[i].title}</div>`;
  }
});
