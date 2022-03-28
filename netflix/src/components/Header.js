import React from "react";
import Link from "next/link";
import netflix from "../public/netflix.png";

const Header = () => {
  return (

    <div className="nav">
      <img src={netflix.src} className="nav__logo" alt="Netflix" />
      <nav className="nav__links">
        <Link href="/">
              <a className="nav__link">Movies</a>
        </Link>
        <Link href="/moviebytitle">
              <a className="nav__link">Search</a>
        </Link>
        <Link href="/watchlist">
              <a className="nav__link">Watchlist</a>
        </Link>
        <Link href="/login">
 
          <button type="button" className="btn btn__color-red">
                S'identifier
              
          </button>
        </Link> 
      
      </nav>
    </div>
   /* <header className="header__main">
      <div className="header__logo">
        <img src={netflix.src} alt="nike" />
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">Movies</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/moviebytitle">
              <a className="nav__link">Search</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/watchlist">
              <a className="nav__link">Watchlist</a>
            </Link>
          </li>
          <Link href="/#">
 
                <button type="button" className="btn btn__color-red">
                     S'identifier
                    
                </button>
          </Link> 

       
        </ul>
      </nav>
    </header>*/
  );
};

export default Header;
/** <Button type="button" classes="btn btn__color-white" function={() => console.log("islogged")} title="login" />
          */