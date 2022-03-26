const apiUrlMovies = "https://api.themoviedb.org/3/discover/movie?api_key=7f73b4bd455e5ace6fdc9f0d04e45857&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=7&with_watch_monetization_types=flatrate"
const apiUrlMovie= "https://api.themoviedb.org/3/movie";
const apiUrlMovieTitle= "https://api.themoviedb.org/3/search/movie?api_key=7f73b4bd455e5ace6fdc9f0d04e45857&language=fr&query=";
const API_KEY = "7f73b4bd455e5ace6fdc9f0d04e45857";
const BASE_URL_Trending = "https://api.themoviedb.org/3";

export default {
    getMovies() {
        return fetch(`${apiUrlMovies}`)
        .then((res)=> res.json())
    },

    getmovieById(id) {
        return fetch(`${apiUrlMovie}/${id}?api_key=7f73b4bd455e5ace6fdc9f0d04e45857&language=fr`)
        .then((res)=> res.json())
    },

    getmovieByTiTle(title) {
        return fetch(`${apiUrlMovieTitle}${title}&page=1&include_adult=false`)
        .then((res)=> res.json())
    },

    getmovieTrending() {
        return fetch(`${BASE_URL_Trending}/trending/all/week?api_key=${API_KEY}`)
        .then((res)=> res.json())
    },
    getmovieTrailer(id) {
        return fetch(`${apiUrlMovie}/${id}?api_key=7f73b4bd455e5ace6fdc9f0d04e45857&append_to_response=videos`)
        .then((res)=> res.json())
    }

}