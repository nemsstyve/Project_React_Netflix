import React from 'react'
import { useState,useEffect } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import movieService from '../services/movie.service';
import Modal from './Modal';
import YouTube from 'react-youtube';
import axios from 'axios';




const Banner = () =>{
  
  const [movie, setMovie] = useState([]);
  const [popup, setPopup] = useState(false);
  const API_KEY = "7f73b4bd455e5ace6fdc9f0d04e45857";
  const MOVIE_API = "https://api.themoviedb.org/3/"
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false)

   function handleClickPopup(){
     popup? setPopup(false) : setPopup(true);
   }  
  useEffect( ()=>{
    movieService.getMovies()
    .then((data) => {
      console.log(data)
      setMovie(
          data.results[
            Math.floor(Math.random() * data.results.length-1)
          ]);


             fetchMovie(data.results[
              Math.floor(Math.random() * data.results.length-1)
            ].id)
           
         
      
    })
  .catch(err=>console.log(err))

   
  }, []);

  const fetchMovie = async (id) => {
    const {data} = await axios.get(`${MOVIE_API}movie/${id}`, {
        params: {
            api_key: API_KEY,
            append_to_response: "videos"
        }
    })

    if (data.videos && data.videos.results) {
        const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
        setTrailer(trailer ? trailer : data.videos.results[0])
    }

    setMovie(data)
}


  function truncateText(string, n ) {
    return string?.length> n? 
           string.substr(0, n-1) + "..."
           :
           "No description";

  }

  const bannerStyle = {
     backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
     backgroundSize: "cover",
     backgroundPosition: "center center",

  }

  console.log(popup)

  return (
  <>  
    <header className='banner' style={bannerStyle} > 
       
        <div className="banner__content">

          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_title}
          </h1>
         
          <p className="banner__description">
            {truncateText(movie?.overview, 100)}
          </p>
          <div className="banner__buttons">
           
            {playing ?
                                <>
                                    <YouTube
                                        videoId={trailer.key}
                                        className={"youtube amru"}
                                        containerClassName={"youtube-container amru"}
                                        opts={
                                            {
                                                width: '100%',
                                                height: '100%',
                                                playerVars: {
                                                    autoplay: 1,
                                                    controls: 0,
                                                    cc_load_policy: 0,
                                                    fs: 0,
                                                    iv_load_policy: 0,
                                                    modestbranding: 0,
                                                    rel: 0,
                                                    showinfo: 0,
                                                },
                                            }
                                        }
                                    />
                                    <button onClick={() => setPlaying(false)} className={"button btn btn__color-red close-video"}>Close
                                    </button>
                                </> :
                                <div className="banner__buttons">

                                  <button  className="banner__button " onClick={() => setPlaying(true)}
                                             type="button">
                                    <PlayArrowIcon/> Lecture
                                  </button>
                                   
                                   <button className="banner__button" onClick={handleClickPopup}>
                                      <HelpOutlineIcon/> Plus d'infos
                                  </button>  
                                
                                           
                                          
                                  
                                </div>
            }

          
          </div>

        </div>

        <Modal 
           bannerStyle={bannerStyle}
           movie={movie}
           popup={handleClickPopup}
           popupStatut={popup}/>
        
    </header>
   </>  
  )
}

export default Banner;

// }
        