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
        document.getElementById('poster-img').innerHTML += `<div class='results'><img src="${results.Search[i].Poster} id=${i}"></div><p>${results.Search[i].Title} ${results.Search[i].Year}</p></div>`;

        const apiKey = 'AIzaSyD50XUXFl0OiIviqMZTB5qIqzCJY9utQj4'; // pls don't steal me :)
        fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${results.Search[i].Title}&maxResults=1&part=snippet`).then(response => response.json()
                  .then(results => {
                    console.log(results.items[0].id.videoId);
                  })
                );
      }
    });
};

export default getMovies;
