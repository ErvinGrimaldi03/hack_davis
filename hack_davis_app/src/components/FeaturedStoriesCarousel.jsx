import React, { useState } from 'react';
import './FeaturedStoriesCarousel.css';

export default function FeaturedStoriesCarousel({ stories = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Ensure stories is an array
  const storiesArray = Array.isArray(stories) ? stories : [];
  const total = storiesArray.length;
  
  // Responsive visible count based on screen width
  const getVisibleCount = () => {
    if (windowWidth <= 480) return 1;
    if (windowWidth <= 768) return 2;
    return 3;
  };
  
  const visibleCount = getVisibleCount();

  const prev = () => {
    let newIndex = currentIndex - visibleCount; 
    if (newIndex < 0) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  // Add window resize listener
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const next = () => {
    let newIndex = currentIndex + visibleCount;
    if (newIndex > total - visibleCount) newIndex = Math.max(0, total - visibleCount);
    setCurrentIndex(newIndex);
  };

  const getVisibleStories = () => {
    return storiesArray.slice(currentIndex, currentIndex + visibleCount);
  };

  return (
    <div className="carousel-container">
      <div className="controls">
        <button 
          onClick={prev} 
          aria-label="Previous" 
          disabled={currentIndex === 0}
        >
          &larr;
        </button>
        <button 
          onClick={next} 
          aria-label="Next" 
          disabled={currentIndex >= total - visibleCount}
        >
          &rarr;
        </button>
      </div>

      <div className="story-grid">
        {getVisibleStories().map(story => (
          <div key={story.id} className="story-card">
            <div className="card-inner">
              <div className="card-front">
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="card-image"
                />
                <div className="card-overlay">
                  <h3 className="card-title">{story.title}</h3>
                  <p className="card-meta">{story.date} • {story.category}</p>
                </div>
              </div>
              <div
                className="card-back"
                onClick={() => setSelectedStory(story)}
              >
                <h3>{story.title}</h3>
                <button className="read-more">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedStory && (
        <Modal story={selectedStory} onClose={() => setSelectedStory(null)} />
      )}
    </div>
  );
}

function Modal({ story, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{story.title}</h2>
        <p className="modal-meta">{story.date} • {story.category}</p>
        <div className="modal-body">{story.content}</div>
      </div>
    </div>
  );
}