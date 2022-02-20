import React, {useState, FC} from 'react';
import './home.scss';


export const Ko = () => {
    const [isOpen, setIsOpen] = React.useState([
        {
            id: 0,
            name: "Toto je jméno",
            label: "1Vždy dbám na kvalitu dané práce a dodržuji termíny dodání.",
            stat: false
        },
        {
            id: 1,
            name: "Toto je jméno1",
            label: "2Vždy dbám na kvalitu dané práce a dodržuji termíny dodání.",
            stat: false
        },
        {
            id: 2,
            name: "Toto je jméno2",
            label: "3Vždy dbám na kvalitu dané práce a dodržuji termíny dodání.",
            stat: false
        },
        {
            id: 3,
            name: "Toto je jméno3",
            label: "4Vždy dbám na kvalitu dané práce a dodržuji termíny dodání.",
            stat: false
        },

    ]);

    const Clicko = (id:number) => {
        isOpen[id].stat = !isOpen[id].stat
        setIsOpen([...isOpen])
    };

    return (
            <div className="home">
                <div className="home__container">
                    {isOpen.map(item =>
                        <div className="home__dropped"
                             onClick={()=>Clicko(item.id)}
                             key={item.id}>
                            <div>{item.name}</div>
                            <div className={isOpen[item.id].stat ? "home__dropped_text2" : "home__dropped_text1"}>
                                {item.label}
                            </div>
                            <div className="home__cara"/>
                        </div>
                    )}
                </div>
            </div>
    )
}


const Home = () => {
    /*const [isOpen, setIsOpen] = React.useState({first: false, second: false});

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__dropped"
                     onClick={() => setIsOpen(prevIsOpen => {
                         return {...prevIsOpen, first: !isOpen.first}
                     })}>
                    Proč vybrat právě mé služby?
                </div>
                <div className={isOpen.first ? "home__dropped_text2" : "home__dropped_text1"}>
                    {Demo[0].label}
                </div>
                <div className="home__cara"/>


                <div className="home__dropped"
                     onClick={() => setIsOpen(prevIsOpen => {
                         return {...prevIsOpen, second: !isOpen.second}
                     })}>Toto je button
                </div>
                <div className={isOpen.second ? "home__dropped_text2" : "home__dropped_text1"}>
                    {Demo[1].label}
                </div>
                <div className="home__cara"/>

            </div>
        </div>
    )*/
    return (
        <div>
            <Ko/>
        </div>
    )
}

export default Home;