import Link from "next/link";

const MovieCard = (props) => {
  const link = 'https://api.themoviedb.org/3/discover/movie?api_key=7f73b4bd455e5ace6fdc9f0d04e45857&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
  
    return (
        
        <div className="product__card">
             <div className="product__img">
               <img src={"https://image.tmdb.org/t/p/w500" +props.movie.backdrop_path} alt={props.movie.path}/>
              </div>
              <div className="product__data">
                <h2 style={{color : 'white'}}>{props.movie.title}</h2>
                <center><p>
                  <Link href={`/movie/${props.movie.id}`} >
                  {/* <Link href={'/shop/' + props.product.id} */}
                    <a style={{textDecoration :'none',color:'red'}}>
                      Voir le film
                    </a>
                  </Link>
                </p></center>  
                
              </div>
            </div>
    );
}

export default MovieCard;
