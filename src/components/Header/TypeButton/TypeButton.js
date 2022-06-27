import React from "react";
import css from "./TypeButton.module.css";


const TypeButton = ({name}) => {
    return <button type="submit" className={css.button}>{name}</button>
       
}

export default TypeButton;