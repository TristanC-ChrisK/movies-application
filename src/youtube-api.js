export default ( title ) => {

    const api_key = 'AIzaSyD50XUXFl0OiIviqMZTB5qIqzCJY9utQj4'; // pls don't steal me :)

    let req = fetch(`https://www.googleapis.com/youtube/v3/search?key=${api_key}&q=${title}&maxResults=1&part=snippet`);

    req.then( response => response.json().then( ({ items }) => {
        // items.forEach( video => {
        //     console.log(video.snippet.title);
        // });
        let video = items[0];
        console.log(video.snippet.title);
    }));

};