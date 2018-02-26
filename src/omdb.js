const omdb = require('omdb-js')('544a671d');

const getMovies = (title) => {
  console.log(title);
  omdb.searchForMovie(title, {
    type: 'movie',
    r: 'json',
    page: 1,
    plot: 'full'})
    .then(results => {
      for (let i = 0; i < 10; i++) {
        document.getElementById('poster-img')
          .innerHTML += `<div class='results'><img src="${results.Search[i].Poster}"><p>${results.Search[i].Title} ${results.Search[i].Year}</p></div>`;
      }
    });
};

export default getMovies;
