import getMovies from './omdb';
import movies from './load-msg';

setTimeout(() => {
  document.querySelector('main').style.display = 'block';
  document.getElementById('loading').style.display = 'none';
}, 2000);

movies();

let title = document.getElementById('searchVal');
document.getElementById('searchVal').addEventListener('change', () => {
  document.getElementById('poster-img').innerHTML = '';
  getMovies(title.value);
});
