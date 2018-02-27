/* global fetch */
const updateMovies = () => fetch('/api/movies').then(response => response.json());

updateMovies().then(movies => {
  for (let i = 0; i < movies.length; i++) {
    document.getElementById('myMovies').innerHTML +=
      `<div class='movieTitle' id='${movies[i].id}'>
        <p>${movies[i].title}</p>
          <button name='delete' onclick='deleteMovie(this.id)'>Remove</button>
          <button id=${movies[i]} onclick='patchMovie'>Edit</button>
      </div>`;
  }
});

export default updateMovies;
