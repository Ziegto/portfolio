import React, {useState} from 'react';
import './about.scss';
import PopUp from "../contact/PopUp";

const About = () => {
    const [show, setShow] = useState(false);

    const togglePopup = () => {
        setShow(!show);
        console.log(show);
        console.log("PROBEHLO")
    }

    return (
        <div className="about">
            <div className="about__container">

            </div>

        </div>
    )
};

export default About;