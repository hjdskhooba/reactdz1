import React from "react";
import headerLogo from '../../assets/headerLogo.svg'
import '../MainHeader/header.css'
import searchIcon from '../../assets/searchicon.svg'

const MainHeader = () => {
    return (
    <header className="header">
        <div className="container">
            <nav className="header__nav">
                <h2 className="header__title">
                    <img className="header__logo" src={headerLogo} alt="" />
                </h2>
                <ul className="header__list">
                    <li className="header__item"><a href="./">Home</a></li>
                    <li className="header__item"><a href="./">community</a></li>
                    <li className="header__item"><a href="./">Videos and fotos</a></li>
                    <li className="header__item"><a href="./">Sign in</a></li>
                    <li className="header__item"><a href="./">FAQ</a></li>
                </ul>
                <div className="header__input__block">
                    <img className="searchIcon" src={searchIcon} alt="searchIcon" />
                    <input type="text" className="header__input" placeholder="search" />
                </div>
             </nav>
        </div>
    </header>
)}

export default MainHeader;