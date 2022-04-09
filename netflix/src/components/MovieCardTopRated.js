import Link from "next/link";
import Modal from './Modal';
import { useState } from "react";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


const MovieCardTopRated = ({movietoprated,isPoster}) => {

  const [popup, setPopup] = useState(false);

 function handleClickPopup(){
   popup? setPopup(false) : setPopup(true);
 }  

 function handleClosePopup(){
  setPopup(false);
}  

 const dateParser = (date) =>{
    let newDate = new Date(date).toLocaleDateString('fr-FR', {
      year:"numeric",
      month:"long",
      day: "numeric",
    

    })
    return newDate;
  }

  const bannerStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movietoprated?.backdrop_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",

 }
    return (
      <>
        <div key={movietoprated.id}>
            {isPoster? (
               <img src={`https://image.tmdb.org/t/p/original/${movietoprated.poster_path}`} 
               className="row__image" 
               
               alt={`${movietoprated.title} || ${movietoprated.name} || ${movietoprated.original_title} `} 
                /> 
                ) :
                (
                  <img src={`https://image.tmdb.org/t/p/original/${movietoprated.backdrop_path}`} 
                  className="row__image" 
                 
                  alt={`${movietoprated.title}`}
                   /> 
                )}

              <center><button className="detail_plus banner__button" onClick={handleClickPopup}><HelpOutlineIcon/> Plus d'infos</button></center>


           <Modal 
           bannerStyle={bannerStyle}
           movie={movietoprated}
           popup={handleClickPopup}
           popupStatut={popup}/>

            
          </div>
         
       </> 
    );
}
//"{props.movie?.title || props.movie?.name || props.movie?.original_title}"
export default MovieCardTopRated;
