import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import AddIcon from '@mui/icons-material/Add';

const Index = ({bannerStyle,movie, popup, popupStatut,closeFunction}) => {
  const router = useRouter();
 // const [movie, setMovie] = useState();
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
    })
    return newDate;
}
  

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

   <>
    {popupStatut ? (
    <>  
    <div className="overlay" onClick={closeFunction}></div>
    <div className={`quickView ${popupStatut && "open"}`} >
      <div className="quickView__banner" style={bannerStyle} >
      <center>
              <button className="banner__button" onClick={() => addTowatchlist(movie)}>
                  <AddIcon/> Watchlist
              </button>
          
          </center>    
        <div className="quickView__content">
            <h3 className="quickView__title">
            {movie?.title || movie?.name || movie?.original_title}
            </h3>
            <h3 style={{color : "rgba(120,120,120,3)"}}>
                  Publié le : {dateParser(movie?.release_date)}
            </h3>
            <p style={{textAlign:"justify"}}>
              {movie?.overview}
            </p>
        </div>
        
          {valid && showToast(movie.title)}
          <ToastContainer limit={1} autoClose={2000}/>
        <button className="quickView__close" onClick={popup}>
            <CancelOutlinedIcon fontSize='large'/>
        </button>
      </div>
    </div>
    </>
     ) : (
            ""
           )} 
      
     
  </>
    
      
  );
};

export default Index;
