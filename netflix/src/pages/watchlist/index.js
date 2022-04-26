import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TitlePage from "../../components/TitlePage";

const Index = () => {
  const [watchlist, setWatchlist] = useState();


  const deleteWatchlist = () => {
    localStorage.removeItem("watchlist");
    setWatchlist(null);
  };

  useEffect(() => {
    setWatchlist(JSON.parse(localStorage.getItem("watchlist")) || []);
  }, []);

  const deleteMovie = (movie) => {
    const filteredWatchlist = watchlist.filter((item) => item.id != movie.id);
    localStorage.setItem("watchlist", JSON.stringify(filteredWatchlist));
    setWatchlist(filteredWatchlist);
  };
  
  return (
    <div className="page__cart">
      <Header/>
       <br/><br/><br/><br/><br/><br/>
      <TitlePage title="Watchlist" /><br/>
      
      {watchlist ? (
        <>
          <div className="products__grid">
          {watchlist.map((cartItem) => (
            <div className="product__card" key={cartItem.id}>
              <div className="product__img">
                <img src={"https://image.tmdb.org/t/p/w500" +cartItem.backdrop_path} alt={cartItem.path}/>
               </div>
               <div className="product__data">
                 <h2 style={{color : 'white'}}>{cartItem.title}</h2>
                 <center>
                     <button style={{color :'white', backgroundColor:'red',border: 'none'}} onClick={()=>deleteMovie(cartItem)}>Supprimer</button>
                 </center>
               </div>
             </div>
                
           ))}

          </div>
        
          <br/><br/><br/>
          <center><Button
            title="Supprimer le watchlist"
            classes="btn btn__color-white"
            type="button"
            function={deleteWatchlist}
          /></center>
          
        </>
      ) : (
        <p className="text__center" style={{color: 'white'}}>Votre bibliothèque est vide</p>
      )}

      <Footer/>
     
    </div>
  );
};



export default Index;