import React from "react";
import css from "./TypeButton.module.css";


const TypeButton = ({name, style}) => {
    return (<li className={css.buttonList_item}>
        <button style={style} type="submit" className={css.button}>{name}</button>
    </li>)
       
}

export default TypeButton;