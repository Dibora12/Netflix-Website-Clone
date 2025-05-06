const api = "api_key-0d7fcb538472b4a248392fdaf9ae8532";
const base_url = "https://image.tmdb.org/t/p/original";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";


const requests = {

    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixoriginals: `${base_url}/discover/tv?${api}&with_network=213`,
    ftechActionMovies: `${base_url}/discover/movie?${api}&with_genres=28}`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,



};

function truncate(str,n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;

    fetch(requests.fetchNetflixOriginals)
        .them((rea) => resizeBy.json())
        
}

.then((data) => {
    console.log(data.results);


    const setmovie = data.results[Math.floor(Math.random() * data.results.length - 1)];



    var banner = document.getElementById("banner");
    var banner_title = document.getElementById("banner_title");
    var banner__desc = document.getElementById("banner__description");

    banner.stylebackgroundImage = "url(" + banner_url + setmovie.backdrop_path + ")";
    banner__desc.innerText = truncate(setmovie.overview,150);
    banner title innertext = setmovie.name;

});

fetch (requests.fetchNetflixOriginals)
.then((res) => res.json())


.then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement{"div"}
}