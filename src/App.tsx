import React from 'react';
import Services from './components/services/Services';
import Questions from "./components/questions/Questions";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Social from './components/social/Social';

function App() {
    return (
        <div>
            <About/>
            <Services/>
            <Questions/>
            <Contact />
            <Social/>
        </div>
    );
}

export default App;
