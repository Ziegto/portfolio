import React, {useState} from 'react';
import './contact.scss'
import emailjs from '@emailjs/browser';
import PopUp from "./PopUp";

const Contact = () => {
    const [status, setStatus] = useState('a');
    const [text, setText] = useState('');

    const sendEmail = (e: any) => {
        e.preventDefault();
        emailjs.sendForm('service_i50qq2x', 'template_8rjr0nn', e.target
            , 'user_LyLSi9Trqil1bzm13xMi8')
            .then(() => {
                setStatus('success')
                setText("Úspěšně odesláno.")
                setTimeout(() => setStatus(''), 3000)
                e.target.reset()
            }, (error) => {
                setStatus('error')
                setText("Něco se pokazilo. Zkuste to prosím později.")
                setTimeout(() => setStatus(''), 3000)
            });
    };

    return (
        <div className="contact">
            <h1 className="contact__nadpis">Kontaktní formulář</h1>
            <div className="contact__container">
                <form onSubmit={sendEmail} className="contact__form">
                    <input className={"contact__input"} type="text" name="name" required placeholder="Jméno"/>
                    <input className="contact__input" type="email" name="email" required placeholder="Email"/>
                    <input className="contact__input" type="text" name="phone" placeholder="Telefon"/>
                    <textarea className="contact__textarea" name="message" required placeholder="Zpráva"/>
                    <button className="contact__button" type="submit" value="Send">ODESLAT</button>
                </form>
                {status === 'success' && <PopUp classn={'popup__open'} text={text}/>}
                {status === 'error' && <PopUp classn={'popup__open'} text={text}/>}
                {status === '' && <PopUp text={text} classn={'popup__close'}/>}
            </div>
        </div>
    )
}

export default Contact;