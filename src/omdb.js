const omdb = require('omdb-js')('544a671d');

const getMovies = (title) => {
    console.log(title);
    omdb.searchForMovie(title, {
        type: 'movie',
        r: 'json',
        page: 1,
        plot: 'full'})
        .then(results => {

            let resultList = document.getElementById('poster-img');
            resultList.innerHTML = '';

            for (let i = 0; i < 10; i++) {

                let {Poster: poster, Title: title, Year: year} = results.Search[i];

                resultList.innerHTML += `<div id='results${i}'><img src="${poster}"></div><p>${title} ${year}</p></div>`;

                const apiKey = 'AIzaSyD50XUXFl0OiIviqMZTB5qIqzCJY9utQj4'; // pls don't steal me :)
                fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${title}+${year}+Trailer&maxResults=1&part=snippet`)
                    .then(response => response.json()
                        .then(results => {
                            let img = document.getElementById('results' + i).children[0];
                            img.style.cursor = "pointer";

                            img.setAttribute('data-attr', results.items[0].id.videoId);
                            img.addEventListener('click', (ev) => {
                                // let iframe = `<iframe id="player" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/${img.getAttribute('data-attr')}?enablejsapi=1" frameborder="0"></iframe>`;
                                window.open(`http://www.youtube.com/watch?v=${results.items[0].id.videoId}`, "_blank");
                            });
                        })
                    );
            }
        });
};

export default getMovies;
