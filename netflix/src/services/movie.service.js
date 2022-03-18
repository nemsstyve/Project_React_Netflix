const apiUrlMovies = "https://api.themoviedb.org/3/discover/movie?api_key=7f73b4bd455e5ace6fdc9f0d04e45857&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
const apiUrlMovie= "https://api.themoviedb.org/3/movie"
export default {
    getMovies() {
        return fetch(`${apiUrlMovies}`)
        .then((res)=> res.json())
    },

    getmovieById(id) {
        return fetch(`${apiUrlMovie}/${id}?api_key=7f73b4bd455e5ace6fdc9f0d04e45857&language=fr`)
        .then((res)=> res.json())
    }
}