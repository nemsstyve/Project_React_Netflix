import React, { useEffect, useState } from "react";

const FilterDiscover = ({ movies, setFilteredDiscover, activeGenre, setActiveGenre,nameGenre, setNameGenre}) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFilteredDiscover(movies);
       //Checks- don't do anything, just return all
      return;
    }
    
    const filtered = movies.filter((movie) =>
      movie.genre_ids.includes(activeGenre),
    );
    setFilteredDiscover(filtered);

   
  }, [activeGenre]);


  
return (
<div class="dropdown">
    <button class="dropbtn">Genres</button>
    <div class="dropdown-content">
        <button onClick={() => setActiveGenre(0) && FectNameGenre("All")}className={activeGenre === 0 ?  "active" : ""}>All</button>
        <button onClick={() => setActiveGenre(28) && FectNameGenre("Action")}className={activeGenre === 28 ? "active" : ""}>Action</button>
        <button onClick={() => setActiveGenre(12)} className={activeGenre === 12 ? "active" : ""}>  Adventure </button>
        <button onClick={() => setActiveGenre(16)}className={activeGenre === 16 ? "active" : ""}>Animation</button>
        <button onClick={() => setActiveGenre(35)}className={activeGenre === 35 ? "active" : ""}>Comedy</button>
        <button onClick={() => setActiveGenre(80)} className={activeGenre === 80 ? "active" : ""}>  Crime </button>
        <button onClick={() => setActiveGenre(99)}className={activeGenre === 99 ? "active" : ""}>Documentary</button>
        <button onClick={() => setActiveGenre(18)}className={activeGenre === 18 ? "active" : ""}>Drama</button>
        <button onClick={() => setActiveGenre(10751)} className={activeGenre === 10751 ? "active" : ""}>  Family </button>
        <button onClick={() => setActiveGenre(14)} className={activeGenre === 14 ? "active" : ""}>  Fantasy </button>
        <button onClick={() => setActiveGenre(36)} className={activeGenre === 36 ? "active" : ""}>  History </button>
        <button onClick={() => setActiveGenre(27)}className={activeGenre === 27 ? "active" : ""}>Horror</button>
        <button onClick={() => setActiveGenre(10402)}className={activeGenre === 10402 ? "active" : ""}>Music</button>
        <button onClick={() => setActiveGenre(9648)} className={activeGenre === 9648 ? "active" : ""}>  Mystery </button>
        <button onClick={() => setActiveGenre(10749)} className={activeGenre === 10749 ? "active" : ""}>  Romance </button>
        <button onClick={() => setActiveGenre(878)}className={activeGenre === 878 ? "active" : ""}>Science Fiction</button>
        <button onClick={() => setActiveGenre(10770)}className={activeGenre === 10770 ? "active" : ""}>TV Movie</button>
        <button onClick={() => setActiveGenre(53)} className={activeGenre === 53 ? "active" : ""}>  Thriller </button>
        <button onClick={() => setActiveGenre(10752)} className={activeGenre === 10752 ? "active" : ""}>  War </button>
        <button onClick={() => setActiveGenre(37)} className={activeGenre === 37 ? "active" : ""}>  Western </button>
    </div>
    </div>
  
    
  );
};
export default FilterDiscover;
