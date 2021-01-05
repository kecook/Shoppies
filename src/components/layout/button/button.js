import React from 'react';
import './button.css';


const STYLES =[
    "btn--light--solid",
    "btn--primary--solid",
    "btn--scuba--solid",
    "btn--x--corner"
    
];

const SIZE = [ "btn--medium", 'btn--full', 'btn--close'];

const button = ({text,
     type,
     onClick,
     buttonStyle,
     buttonSize }) => {

        const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        :STYLES[0];

        const checkButtonSize = SIZE.includes(buttonSize)? buttonSize : SIZE[0];
    
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {text}
        </button>
    )
}
export default button;