import React from 'react';
import Services from './components/services/Services';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
    return (
        <div>
            <Services/>
            <Home/>
            <About/>
            <Contact />
        </div>
    );
}

export default App;
