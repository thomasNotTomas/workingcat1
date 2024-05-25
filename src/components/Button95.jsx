import React, { useState, useEffect } from "react";

function Button95( {text, onClick} ) {

    const [activeClass, setActiveClass] = useState('windows-95-button');

    const handleClick = () => {
        setActiveClass('windows-95-clicked');
        if (onClick) {
            onClick();
        }
    };

    useEffect(() => {
        if (activeClass === 'windows-95-clicked') {
            const timer = setTimeout(() => {
                setActiveClass('windows-95-button');
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [activeClass]);

    return(

        <div className={activeClass} onClick={handleClick}>
            {text}
        </div>

    )
}

export default Button95