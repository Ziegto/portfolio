import React from 'react';
import '../contact/contact.scss';

interface Props {
    text: any,
    classn?:any
}

const PopUp: React.FC<Props> = ({text, classn}) => {
    return (
            <div className={classn}>
                <p className="popup__text">{text}</p>
        </div>
    );
}

export default PopUp;