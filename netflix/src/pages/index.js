import { useEffect, useState } from "react";
import TitlePage from "../components/TitlePage";
import movieService from "../services/movie.service";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard";
import FilterMovies from "../components/FilterMovies";

const Index = () => {
  const [movies, setMovies] = useState();
  const [moviestoprated, setMoviesTopRated] = useState();
  const [filteredDiscover, setFilteredDiscover] = useState([]); 
  const [filteredTopRated, setFilteredTopRated] = useState([]); 
  const [activeGenre, setActiveGenre] = useState(0);
  
  useEffect(() => {
    movieService.getMovies()
      .then((data) => {
        console.log(data)
        setMovies(data.results);
        setFilteredDiscover(data.results);
      })
    .catch(err=>console.log(err))


    movieService.getMovies_Top_Rated()
      .then((data) => {
        console.log(data)
        setMoviesTopRated(data.results);
        setFilteredTopRated(data.results);
      })
    .catch(err=>console.log(err))

   
    
  },[]);

 
 
  return (
    <div className="page__shop">
      <Banner/>
      <br/><br/>
      <div className="row">
        <h2 className="row__title">
              Discover 
              <FilterMovies movies={movies} setFilteredDiscover={setFilteredDiscover} activeGenre={activeGenre} setActiveGenre={setActiveGenre}  />
     
        </h2>
       
        <center><h1>
                                               {activeGenre === 0 ? "All" : activeGenre===28 ? "Action" : 
                                               activeGenre === 12 ? "Adventure" : activeGenre===16 ? "Animation" : 
                                               activeGenre === 35 ? "Comedy" : activeGenre===80 ? "Crime" : 
                                               activeGenre === 99 ? "Documentary" : activeGenre===18 ? "Drama" : 
                                               activeGenre === 10751 ? "Family" : activeGenre===14 ? "Fantasy" : 
                                               activeGenre === 36 ? "History" : activeGenre===27 ? "Horror" : 
                                               activeGenre === 10402 ? "Music" : activeGenre===9648 ? "Mystery" : 
                                               activeGenre === 10749 ? "Romance" : activeGenre===878 ? "Science Fiction" :
                                               activeGenre === 10770 ? "TV Movie" : activeGenre===53 ? "Thriller" : 
                                               activeGenre === 10752 ? "War" : activeGenre===37 ? "Western" : "All"}
                </h1></center>
     
      
        <div className="row__images">
      
          {filteredDiscover &&
            filteredDiscover.map((movie) => (
            
            <MovieCard movie={movie} key={movie.id} isPoster={true} />
            
            ))}
        </div>    
      </div>


      <br/><br/>
      <div className="row">
        <h2 className="row__title">
              Top Rated 
              <FilterMovies movies={moviestoprated} setFilteredDiscover={setFilteredTopRated} activeGenre={activeGenre} setActiveGenre={setActiveGenre}  />
     
        </h2>
       
        <center><h1>
                                               {activeGenre === 0 ? "All" : activeGenre===28 ? "Action" : 
                                               activeGenre === 12 ? "Adventure" : activeGenre===16 ? "Animation" : 
                                               activeGenre === 35 ? "Comedy" : activeGenre===80 ? "Crime" : 
                                               activeGenre === 99 ? "Documentary" : activeGenre===18 ? "Drama" : 
                                               activeGenre === 10751 ? "Family" : activeGenre===14 ? "Fantasy" : 
                                               activeGenre === 36 ? "History" : activeGenre===27 ? "Horror" : 
                                               activeGenre === 10402 ? "Music" : activeGenre===9648 ? "Mystery" : 
                                               activeGenre === 10749 ? "Romance" : activeGenre===878 ? "Science Fiction" :
                                               activeGenre === 10770 ? "TV Movie" : activeGenre===53 ? "Thriller" : 
                                               activeGenre === 10752 ? "War" : activeGenre===37 ? "Western" : "All"}
                </h1></center>
     
      
        <div className="row__images">
      
          {filteredTopRated &&
            filteredTopRated.map((movietoprated) => (
            
            <MovieCard movie={movietoprated}  key={movietoprated.id}  isPoster={true} />
            
            ))}
        </div>    
      </div>
    </div>
  );
};

export default Index;
