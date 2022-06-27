import React from "react";
import css from "./HeaderNav.module.css";

const HeaderNav = ({name}) => {
    return (
        <li className={css.link_item}>
            <a className={css.link} href="./#">{name}</a>
            </li>)
    
}

export default HeaderNav;