import getMovies from './omdb';
import theJordan from './myMovies';

setTimeout(() => {
  document.querySelector('main').style.display = 'block';
  document.getElementById('loading').style.display = 'none';
}, 2000);

theJordan();

let title = document.getElementById('searchVal');
document.getElementById('searchVal').addEventListener('change', () => {
  document.getElementById('poster-img').innerHTML = '';
  getMovies(title.value);
});
