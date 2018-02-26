import getMovies from './omdb';
import updateMovies from './myMovies';

setTimeout(() => {
  document.querySelector('main').style.display = 'block';
  document.getElementById('loading').style.display = 'none';
}, 2000);

let title = document.getElementById('searchVal');
document.getElementById('searchVal').addEventListener('change', () => {
  document.getElementById('poster-img').innerHTML = '';
  getMovies(title.value);
});

const patchMovie = (id, title, rating) => {
  const opts = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: title, rating: rating })
  };
  fetch(`/api/movies/${id}`, opts);
};

const deleteMovie = (id) => {
  const options = { method: 'DELETE' };

  fetch(`/api/movies/${id}`, options).then(() => {
    updateMovies();
  });
};

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

const addMovie = () => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: titleInput.value, rating: clamp(ratingInput.value, 0, 5)})
  };

  fetch('/api/movies', options).then(() => {
    titleInput.value = '';
    ratingInput.value = '';
    updateMovies();
  });
};
