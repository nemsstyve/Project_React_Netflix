import { useEffect, useState } from "react";
import TitlePage from "../../components/TitlePage";
import movieservice from "../../services/movie.service";
import MovieCard from "../../components/MovieCard";

const Index = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    movieservice.getMovies()
      .then((data) => {
        console.log(data)
        setMovies(data.results);
      })
    .catch(err=>console.log(err))
    
  },[]);

  return (
    <div className="page__shop">
      <TitlePage title="Movies" />
      <div className="products__grid">
        {movies &&
           movies.map((movie) => (
           
           <MovieCard movie={movie} key={movie.id}/>
           
          ))}
      </div>
    </div>
  );
};

export default Index;
