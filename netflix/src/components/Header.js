import React from "react";
import Link from "next/link";
import netflix from "../public/netflix.png";

const Header = () => {
  return (
    <header className="header__main">
      <div className="header__logo">
        <img src={netflix.src} alt="nike" />
      </div>
      <nav className="header__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/">
              <a className="nav__link">Home</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/movie">
              <a className="nav__link">Movies</a>
            </Link>
          </li>
          <Link href="/#">
 
                <button type="button" className="btn btn__color-red">
                     S'identifier
                    
                </button>
          </Link> 

       
        </ul>
      </nav>
    </header>
  );
};

export default Header;
/** <Button type="button" classes="btn btn__color-white" function={() => console.log("islogged")} title="login" />
          */