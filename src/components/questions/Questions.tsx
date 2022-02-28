import React from 'react';
import './questions.scss';


export const Questions = () => {
    const [isOpen, setIsOpen] = React.useState([
        {
            id: 0,
            name: "Proč volit právě mé služby?",
            label: "Vždy dbám na kvalitu dané práce a dodržuji termíny dodání.",
            stat: false
        },
        {
            id: 1,
            name: "Jaké jsou ceny služeb?",
            label: "Ceny se vždy dopředu dozvíte, a odvíjí se od velikosti/složitosti práce.",
            stat: false
        },
    ]);

    const openDiv = (id:number) => {
        isOpen[id].stat = !isOpen[id].stat
        setIsOpen([...isOpen])
    };

    return (
            <div className="questions">
                <h1 className="questions__nadpis">Doplňující informace</h1>
                <div className="questions__container">
                    {isOpen.map(item =>
                        <div className="questions__dropped"
                             key={item.id}>
                            <div onClick={()=>openDiv(item.id)}>{item.name}</div>
                            <div className={isOpen[item.id].stat ? "questions__dropped_text2" : "questions__dropped_text1"}>
                                <div className="questions__text">{item.label}</div>
                            </div>
                            <div className="questions__cara"/>
                        </div>
                    )}
                </div>
            </div>
    )
}

export default Questions;