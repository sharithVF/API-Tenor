const URL = "https://tenor.googleapis.com/v2/search?key=AIzaSyDNzsuZ4o7_YOnFP1NRdbB6LZTZgT8OzEs&client_key=my_test_app";

const search = document.getElementById("search");
const container = document.getElementById("containerCards");

window.addEventListener('DOMContentLoaded', () => {
    let URL = 'https://tenor.googleapis.com/v2/featured?key=AIzaSyDNzsuZ4o7_YOnFP1NRdbB6LZTZgT8OzEs&client_key=my_test_app';
    dataRequest(URL);
})

search.addEventListener("keyup", () => {
    let URLGif = `https://tenor.googleapis.com/v2/search?q=${search.value}&key=AIzaSyDNzsuZ4o7_YOnFP1NRdbB6LZTZgT8OzEs`;
    dataRequest(URLGif);
});

function dataRequest(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        container.textContent = (null);
        data.results.map(gif => createGif(gif));
    });
}

function createGif(gif) {
    const img = document.createElement("img");
    img.src = gif.media_formats.mediumgif.url;
    img.setAttribute('alt', gif.content_description);
    img.classList = "gif";
    
    const h2 = document.createElement("h2");
    h2.textContent = gif.content_description;
    h2.classList = "titleGif";

    const div = document.createElement("div");
    div.classList = "divCards";
    
    div.appendChild(h2);
    div.appendChild(img);
    container.appendChild(div);
}