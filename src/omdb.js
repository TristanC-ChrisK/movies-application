/* global fetch */
const omdb = require('omdb-js')('544a671d');

const getMovies = (title) => {
  console.log(title);
  omdb.searchForMovie(title, {
    type: 'movie',
    r: 'json',
    page: 1
  }).then(results => {
    for (let i = 0; i < 10; i++) {
      document.getElementById('poster-img').innerHTML += `<div id='results${i}'><img src="${results.Search[i].Poster}"></div><p>${results.Search[i].Title} ${results.Search[i].Year}</p></div>`;

      const apiKey = 'AIzaSyD50XUXFl0OiIviqMZTB5qIqzCJY9utQj4'; // pls don't steal me :)
      fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${results.Search[i].Title}+${results.Search[i].Year}+Trailer&maxResults=1&part=snippet`).then(response => response.json()
        .then(results => {
          let img = document.getElementById('results' + i).children[0];
          // img.setAttribute('data-attr', results.items[0].id.videoId);
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
              window.open(`http://youtube.com/watch?v=${results.items[0].id.videoId}`, '_blank');
            });
          console.log(results.items[0].id.videoId);
        })
        );
    }
  });
};

export default getMovies;
