import React, { useState } from 'react';
import './FeaturedStoriesCarousel.css';
import './Modal.css';

export default function FeaturedStoriesCarousel({ stories = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState(null);

  // Ensure stories is an array
  const storiesArray = Array.isArray(stories) ? stories : [];
  const total = storiesArray.length;
  
  // Show 2 stories at a time
  const visibleCount = 2;

  const prev = () => {
    let newIndex = currentIndex - visibleCount;
    if (newIndex < 0) newIndex = Math.max(0, total - visibleCount);
    setCurrentIndex(newIndex);
  };
  
  const next = () => {
    let newIndex = currentIndex + visibleCount;
    if (newIndex >= total) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const getVisibleStories = () => {
    return storiesArray.slice(currentIndex, currentIndex + visibleCount);
  };

  const handleLearnMore = (story) => {
    setSelectedStory(story);
  };

  return (
    <div className="featured-carousel-container">
      <h1 className="featured-title">Featured Stories</h1>
      <div className="title-underline"></div>
      
      <div className="featured-story-grid">
        {getVisibleStories().map(story => (
          <div key={story.id} className="featured-story-card">
            <div className="featured-image-container">
              <img
                src={story.imageUrl}
                alt={story.title}
                className="featured-image"
              />
              <div className="featured-category">{story.category}</div>
            </div>
            <div className="featured-info">
              <div className="featured-location">{story.location || "Palisades, CA"}</div>
              <div className="featured-quote">
                "{story.shortQuote || story.content.substring(0, 60)}..." 
                <span className="featured-author">-{story.author || "Anonymous, 45"}</span>
              </div>
              <button 
                className="featured-learn-more" 
                onClick={() => handleLearnMore(story)}
              >
                Click to learn more
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="featured-controls">
        <button onClick={prev} className="featured-nav-btn">&lt;</button>
        <button onClick={next} className="featured-nav-btn">&gt;</button>
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
        
        <div className="modal-header">
          <h2>{story.title}</h2>
          <p className="modal-meta">
            {story.date} • {story.category} • {story.location || "Palisades, CA"}
          </p>
          {story.tags && story.tags.length > 0 && (
            <div className="modal-tags">
              {story.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
        
        <div className="modal-body">
          {/* Split the content into paragraphs */}
          {story.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        {/* Resources section - only shown if story has resources */}
        {story.resources && story.resources.length > 0 && (
          <div className="modal-resources">
            <h3>Resources</h3>
            <div className="resource-links">
              {story.resources.map((resource, index) => (
                <div key={index} className="resource-link-item">
                  <a 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="resource-title"
                  >
                    {resource.name} <span className="arrow">↗</span>
                  </a>
                  {resource.description && (
                    <p className="resource-description">{resource.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="modal-footer">
          <p className="author-info">Story shared by: {story.author || "Anonymous, 45"}</p>
        </div>
      </div>
    </div>
  );
}  