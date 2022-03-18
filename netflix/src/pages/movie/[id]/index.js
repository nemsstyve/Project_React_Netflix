import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TitlePage from "../../../components/TitlePage";
import movieService from "../../../services/movie.service";
import Button from "../../../components/Button";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Index = () => {
  const router = useRouter();
  const [movie, setMovie] = useState();
  const [valid, setValid] = useState(false);


  const showToast = (title) => {
    toast.success(title + " a été ajoué au Watchlist !", {
        position: toast.POSITION.TOP_CENTER,autoClose: 2000
      });
  
  };

  




  const dateParser = (date) =>{
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
      year:"numeric",
      month:"long",
      day: "numeric",
      //hour:"numeric",
      //minute:"numeric",
      //second:"numeric"

    })
    return newDate;
}
  

  useEffect(() => {
    const id = router.query.id;
    movieService.getmovieById(id) 
     .then((data) => {
        setMovie(data);
        console.log(data)
      })
      .catch((err) => console.log(err));
  }, []);

  const addTowatchlist = (element) => {
    //On créé un nouvel object avec une nouvelle propriété quantity
    setValid(true);
    let movieToInsert = {
      id: element.id,
      title: element.title,
      backdrop_path: element.backdrop_path,
      overview: element.overview,
      quantity: 1
    };

      
    
    const watchlistArray = [];

    //Si j'ai déjà un ou des produits dans mon localstorage
    if (localStorage.getItem("watchlist")) {

      const localStorageWatchlist = JSON.parse(localStorage.getItem("watchlist"));
      localStorageWatchlist.forEach((movie) => {
        watchlistArray.push(movie);
      });

      const indexOfExistingMovie = watchlistArray.findIndex((el) => el.id === element.id);

      if (indexOfExistingMovie !== -1) {
        watchlistArray[indexOfExistingMovie].quantity += 1;
      }
      else {
        watchlistArray.push(movieToInsert);
      }
      localStorage.setItem("watchlist", JSON.stringify(watchlistArray));
    }
    //Si localstorage vide
    else {
      watchlistArray.push(movieToInsert);
      localStorage.setItem("watchlist", JSON.stringify(watchlistArray));
    }
  };
  
  return (

    <div className="page__shop">
      <TitlePage title={movie && movie.title} />
      <div>
        <div>
                <div>
                   <center>
                       <img src={ movie && "https://image.tmdb.org/t/p/w500" +movie.backdrop_path} alt={movie && movie.path}/>
                   </center>
                </div>
                <center><h3 style={{color: 'white'}}>Publié le : {movie && dateParser(movie.release_date)}</h3></center>
                <div style={{width: '50%',marginLeft: '24%'}} >
                    <TitlePage description={movie && movie.overview}/>
                    
                </div>
               
               
                <center><Button
                    type="button"
                    classes="btn btn__color-red"
                    function={() => addTowatchlist(movie)}
                    title="ajouter au WatchList"
                    />
                </center>    
                {valid && showToast(movie && movie.title)}
                <ToastContainer limit={1} autoClose={2000}/>
               
        </div>
      </div>
    </div>

      
  );
};

export default Index;
