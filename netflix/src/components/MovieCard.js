import Modal from './Modal';
import { useState } from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const MovieCard = ({movie,isPoster}) => {
 
  const [popup, setPopup] = useState(false);

 function handleClickPopup(){
   popup? setPopup(false) : setPopup(true);
 }  

 function handleClosePopup(){
  setPopup(false);
}  

  const bannerStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",

 }
    return (
      <>
        <div key={movie.id}>
            {isPoster? (
               <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
               className="row__image" 
               alt={`${movie.title} || ${movie.name} || ${movie.original_title} `} 
                /> 
                ) :
                (
                  <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                  className="row__image" 
                  alt={`${movie.title}`}
                   /> 
                )}
                
                
                <center><button style={{zIndex :"1"}} className="detail_plus banner__button" onClick={handleClickPopup}><HelpOutlineIcon/> Plus d'infos</button></center>

           <Modal 
           bannerStyle={bannerStyle}
           movie={movie}
           closeFunction={handleClosePopup}
           popup={handleClickPopup}
           popupStatut={popup}/>

            
          </div>
         
       </> 
    );
}
export default MovieCard;
