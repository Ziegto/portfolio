import React from 'react';
import './services.scss';

import {BsCameraFill} from 'react-icons/bs';
import {MdMiscellaneousServices, MdPeopleAlt} from 'react-icons/md';
import {FaServer, FaNetworkWired} from 'react-icons/fa';
import {HiDatabase} from 'react-icons/hi';
import {IoShareSocial} from 'react-icons/io5';


const cards = [
    {image: <MdMiscellaneousServices/>, name: "Servis", label: "Oprava zařízení (PC, notebook, mobil, ...)"},
    {image: <FaServer/>, name: "Servery", label: "Administrace linux/windows serverů"},
    {image: <HiDatabase/>, name: "Databáze", label: "Návrh a realizace databáze"},
    {image: <BsCameraFill/>, name: "Úpravy fotografií", label: "Úpravy fotografií na míru (photoshop, lightroom)"},
    {image: <IoShareSocial/>, name: "Sociální sítě", label: "Vytvoření a správa profilu (facebook, instagram, ...)"},
    {image: <FaNetworkWired/>, name: "Sítě", label: "Návrh a realizace sítě"},
    {image: <MdPeopleAlt/>, name: "IT konzultace", label: "Řešení IT problému (skládání PC, výběr komponentů, ...)"},

];

const Services = () => (
    <div className="services">
        <div className="services__container">
            {cards.map((item, index) =>
                <div className="services__card" key={index}>
                    <div className="services__logo">{item.image}</div>
                    <div className="services__name">{item.name}</div>
                    <div className="services__cara"/>
                    <div className="services__label">{item.label}</div>
                </div>
            )}
        </div>
    </div>
);

export default Services;