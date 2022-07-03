import React from "react";
import css from "./Header.module.css";
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import buttons from "./TypeButton/TypeButton.json";
import navs from "./HeaderNav/headerNav.json";
import links from './HeaderNav/headerNavAbout.json'
import TypeButton from "./TypeButton/TypeButton";
import HeaderNav from "./HeaderNav";
import Telephone from "./Telephone/Telephone";
import Logo from "./Logo/Logo";
import Cart from "./Cart/Cart";

const Header = () => {
    
  
    return (
        <header className={css.header}>
            <div className={css.list_wrapper}>
            <ul className={css.list}>
                {buttons.map(button => (<TypeButton key={button.id}  style={{color:button.color}} name={button.label}/>))}
            </ul>
            <ul className={css.list}>
                {navs.map(nav =>(<HeaderNav  key={nav.name}   name={nav.name} />) )}
                </ul>
         <div className={css.telephone_wrapper}> <Telephone /></div>
        <div className={css.icon_wrapper}>
        <FaTelegramPlane size={20}  />
        <FaWhatsapp size={20} />
        </div>
        </div>
         <div className={css.logo_wrapper}>
                <Logo />
                <ul className={css.list}>
                   {links.map(link => ( <HeaderNav key={link.name} name={link.name} />))}
                </ul>
                <Cart />
        </div>
        </header>
    )
}

export default Header;