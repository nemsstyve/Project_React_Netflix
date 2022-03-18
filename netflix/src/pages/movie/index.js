import { useEffect, useState } from "react";
import TitlePage from "../../components/TitlePage";
import movieservice from "../../services/movie.service";
import MovieCard from "../../components/MovieCard";
import Filter from "../../components/Filter";

const Index = () => {
  const [movies, setMovies] = useState();
  const [filtered, setFiltered] = useState([]); 
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    movieservice.getMovies()
      .then((data) => {
        console.log(data)
        setMovies(data.results);
        setFiltered(data.results);
      })
    .catch(err=>console.log(err))
    
  },[]);

  return (
    <div className="page__shop">
      <TitlePage title="Movies" />
      <Filter movies={movies} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <br/><br/>
      <div className="products__grid">
        {filtered &&
           filtered.map((movie) => (
           
           <MovieCard movie={movie} key={movie.id}/>
           
          ))}
      </div>
    </div>
  );
};

export default Index;
