import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import TitlePage from "../components/TitlePage";
import MovieCard from "../components/MovieCard";
import movieService from "../services/movie.service";
import Banner from "../components/Banner";
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

const Index = () => {
  const [movies, setMovies] = useState();
  const [filtered, setFiltered] = useState([]); 
  const [activeGenre, setActiveGenre] = useState(0);
  
  useEffect(() => {
    movieService.getMovies()
      .then((data) => {
        console.log(data)
        setMovies(data.results);
        setFiltered(data.results);
      })
    .catch(err=>console.log(err))

   
    
  },[]);

 
 
  return (
    <div className="page__shop">
      <Banner/>
      <br/><br/>
      <div className="row">
        <h2 className="row__title">
              Movies
              <Filter movies={movies} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}  />
     
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
      
          {filtered &&
            filtered.map((movie) => (
            
            <MovieCard movie={movie} key={movie.id} isPoster={true} />
            
            ))}
        </div>    
      </div>
    </div>
  );
};

export default Index;
/*
 {suggestions && suggestions.map((suggestion, i) =>
            <center><div className="sugg" key={i} style={{color : "red",
                                 textAlign : "center", 
                                 cursor:'pointer',
                                 width : '70%',
                                 borderRight : '1px solid red',
                                 borderLeft : '1px solid red',
                                 borderTop : '1px solid red',
                                 borderBottom : '1px solid red'
                                 }}
                         onClick={()=>onSuggestHandler(suggestion.title)}>
               {suggestion.title}
            </div></center>
          )}


*/