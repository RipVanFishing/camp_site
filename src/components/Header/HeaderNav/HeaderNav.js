import React from "react";
import css from "./HeaderNav.module.css";

const HeaderNav = ({name}) => {
    return <a className={css.link} href="./#">{name}</a>
    
}

export default HeaderNav;