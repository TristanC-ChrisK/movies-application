/* global fetch */
const ownedMovies = () => fetch('/api/movies').then(response => response.json());

let theJordan = () => {
  ownedMovies().then(movies => {
    let myMovieList = '';

    for (let i = 0; i < movies.length; i++) {
      myMovieList += `<div class='movieTitle' id='${movies[i].id}'>
                        <p>${movies[i].title}</p>
                        <button class='movieDelete' data-attrib='${movies[i].id}'>Remove</button>
                        <button name='moviePatch' data-attrib='${movies[i].id}''>Edit</button>
                      </div>`;
    }

    document.getElementById('myMovies').innerHTML = myMovieList;

    let deleteBtn = document.getElementsByClassName('movieDelete');

    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener('click', (ev) => {
        deleteMovie(movies[i].id);
      });
    }
  });
};

const addMovie = () => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: title.value, rating: clamp(rating.value, 0, 5)})
  };
  fetch('/api/movies', options).then(() => {
    title.value = '';
    rating.value = '';
    ownedMovies();
  });
};

const deleteMovie = (id) => {
  let options = { method: 'DELETE' };
  fetch(`/api/movies/${id}`, options).then(() => {
    theJordan();
  });
};

export default theJordan;
