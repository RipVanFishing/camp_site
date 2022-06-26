import React from "react";
import buttons from "./TypeButton/TypeButton.json"
import TypeButton from "./TypeButton/TypeButton";
const Header = () => {
    return (
        <header>
            <div>
                {buttons.map(button => (<TypeButton name={button.label} key={button.id}/>))}
                
            </div>
        </header>
    )
}

export default Header;