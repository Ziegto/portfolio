import React from 'react';
import './social.scss'
import {FaLinkedin as Lin} from "react-icons/fa";
import {FaFacebook as Fac} from "react-icons/fa";
import {FaInstagram as Ins} from "react-icons/fa";
import {FaPhoneAlt as Pho} from "react-icons/fa";

const icons = [
    {icon:<Lin/>, web:"https://www.linkedin.com/in/tom%C3%A1%C5%A1-ziegler-327284210/", target:"_blank"},
    {icon:<Fac/>, web:"https://www.facebook.com/666metalista666/", target:"_blank"},
    {icon:<Ins/>, web:"https://www.instagram.com/umelec_tom/", target:"_blank"},
    {icon:<Pho/>, web:"tel:+420 603 765 731", target:"_parent"},
]

const Social = () =>{
    return(
        <div className="social">
            <div className="social__container">
                {icons.map((item, index)=>{
                    return(
                      <div className="social__icon" key={index}>
                          <a className="social__web" href={item.web} target={item.target}>{item.icon}</a>
                      </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Social;