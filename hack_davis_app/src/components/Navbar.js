import React, { useState } from 'react';
import './Navbar.css';

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);


const toggleMenu = () => {
    setIsOpen(!isOpen);
};

const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section){
        section.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    }
};

return (
    <nav className="NavBar"> 
        <h1> Insert Name Here Because I have no Fucking idea on how to call this bitchass Application! </h1>
        <ul className={`NavLink ${isOpen ? 'active' : ''}`}> 
            <li><a href="#about" onClick={() => handleScroll('about')}>About</a></li>
            <li><a href="#stories" onClick={() => handleScroll('stories')}>Stories</a></li>
            <li><a href="#resources" onClick={() => handleScroll('resources')}>Resources</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
);
}

export default NavBar; 