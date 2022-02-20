import React, {useState} from 'react';
import './contact.scss'
import emailjs from '@emailjs/browser';
import PopUp from "./PopUp";
import set = Reflect.set;

const Contact = () => {
    let [status, setStatus] = useState(false);
    const [pop, setPop] = useState(false);
    /*const [show, setShow] = useState(false);

    const toggleClick = () => {
        setPop(!pop)
        setShow(!show)
    }

    function ShowPopup() {
        return (
            show ? <PopUp onClick={toggleClick} text="Je to ok"/> :<PopUp onClick={toggleClick} text="Není to ok"/>
        );
    }*/

    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm('service_i50qq2x', 'template_8rjr0nn', e.target
            , 'user_LyLSi9Trqil1bzm13xMi8')
            .then(() => {
                setPop(true);
                setStatus(true);
            }, (error) => {
                setStatus(false);
                setPop(true);
            });
    };

    return (
        <div className="contact">
            <div className="contact__container">
                <form onSubmit={sendEmail} className="contact__form">
                    <label className="contact__label">Name *</label>
                    <input className="contact__input" type="text" name="name" required/>

                    <label className="contact__label">Email *</label>
                    <input className="contact__input" type="email" name="email" required/>

                    <label className="contact__label">Telefon</label>
                    <input className="contact__input" type="text" name="phone"/>

                    <label className="contact__label">Message *</label>
                    <textarea className="contact__input" name="message" required/>

                    <button type="submit" value="Send">Clickni</button>
                </form>
                {pop
                    ?
                    status ?
                        <p>"ANO"</p>
                        :
                        <p>"NE"</p>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default Contact;