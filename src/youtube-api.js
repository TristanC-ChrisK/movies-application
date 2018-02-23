export default term => {

    const api_key = 'AIzaSyD50XUXFl0OiIviqMZTB5qIqzCJY9utQj4'; // pls don't steal me :)

    let req = fetch(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&q=${term}&max_results=10&part=snippet`)

    req.then( response => response.json().then( ({items}) => {
        items.forEach( video => {
            console.log(video);
        });
    }));

};