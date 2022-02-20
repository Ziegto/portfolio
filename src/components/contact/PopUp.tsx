import React from 'react';
import '../about/about.scss';

interface Props {
    onClick: () => void,
    text:string
}

const PopUp:React.FC<Props> = ({onClick, text}) => {
    return (
        <div className='popup'>
            <div className='popup_open'>
                <h1>{text}</h1>
                <button onClick={onClick}>X</button>
            </div>
        </div>
    );
}

export default PopUp;