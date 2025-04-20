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
            <div className="logo">
                <h1>WeRemain</h1>
            </div>
            <ul className={`NavLinks ${isOpen ? 'active' : ''}`}> 
                <li><a href="#stories" onClick={() => handleScroll('stories')}>Stories</a></li>
                <li><a href="#about" onClick={() => handleScroll('about')}>About</a></li>
                <li><a href="#resources" onClick={() => handleScroll('resources')}>Resources</a></li>
                <li className="share-button"><a href="#share" onClick={() => handleScroll('share')}>Share Your Story</a></li>
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