import { useEffect, useState } from "react";
import TitlePage from "../../components/TitlePage";
import movieservice from "../../services/movie.service";
import MovieCard from "../../components/MovieCard";

const Index = () => {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState("");
  

  const submitSearch = (e) =>{
    e.preventDefault()
  }
 
  useEffect(() => {
    movieservice.getmovieByTiTle(search)
      .then((data) => {
        console.log(data)
        setMovies(data.results);
      })
    .catch(err=>console.log(err))
    
  },[search]);

  const onSuggestHandler = (search)=>{
    setSearch(search)
  }

  return (
    <div className="page__shop">
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <div>
        <center>
           <form className="form-search" onSubmit={(e)=> submitSearch(e)}>
               <input
                   type="text"
                   placeholder="entrer le titre d'un film"
                   id="search"
                   size="50"
                   className="input-search"
                   onChange={(e)=> setSearch(e.target.value)}
               />
               <input className="button-submit"onClick={()=>onSuggestHandler(search)} type="submit" value="Rechercher"/>
           </form>
        </center>
      </div>
      <div className="row">
        <div className="row__images">
        {movies &&
           movies.map((movie) => (
           
           <MovieCard movie={movie} key={movie.id} isPoster={true}/>
           
          ))}
        </div>  
      </div>
    </div>
  );
};

export default Index;
