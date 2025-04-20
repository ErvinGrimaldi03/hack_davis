import React from 'react';
import './BufferHeader.css';
// Import the image directly - you'll need to have this image in your project
import backgroundImage from '../images/main.jpg';

function BufferHeader() {
  // Create the style object with the background image
  const headerStyle = {
    position: 'relative',
    height: '80vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    display: 'flex',
    alignItems: 'center'
  };

  return (
    <div style={headerStyle} className="buffer-header">
      <div className="buffer-content">
        <h1>Resilience in<br />Remembering</h1>
        <p>A space to remember, reflect, and build together within your community.</p>
        <button className="share-story-btn">Share Your Story</button>
      </div>
    </div>
  );
}

export default BufferHeader;