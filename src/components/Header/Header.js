import React from "react";
import css from "./Header.module.css";
import buttons from "./TypeButton/TypeButton.json";
import navs from "./HeaderNav/headerNav.json"
import TypeButton from "./TypeButton/TypeButton";
import HeaderNav from "./HeaderNav";
const Header = () => {
    return (
        <header className={css.header}>
            <div className={css.list_wrapper}>
            <ul className={css.list}>
                {buttons.map(button => (<li className={css.buttonList_item}><TypeButton name={button.label} key={button.id}/></li>))}
            </ul>
            <ul className={css.list}>
                {navs.map(nav =>(<li className={css.link_item}><HeaderNav key={nav.id} name={nav.name} /></li>) )}
                </ul>
                </div>
        </header>
    )
}

export default Header;