import React, { useState, useEffect } from 'react';
import './StoryGallery.css';

// Story Card Component - reusing the same style as carousel
function StoryCard({ story, onSelect }) {
  return (
    <div className="story-card">
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
            <span className="card-topic">{story.topic}</span>
          </div>
        </div>
        <div
          className="card-back"
          onClick={() => onSelect(story)}
        >
          <h3>{story.title}</h3>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </div>
  );
}

// Modal Component which is the same from the carousel
function Modal({ story, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        <h2>{story.title}</h2>
        <p className="modal-meta">{story.date} • {story.category}</p>
        <div className="topic-tag">{story.topic}</div>
        <div className="modal-body">{story.content}</div>
      </div>
    </div>
  );
}

function StoryGallery({ stories = [] }) {
  // States
  const [selectedStory, setSelectedStory] = useState(null);
  const [filteredStories, setFilteredStories] = useState([]); // shows only the one with correct filter
  const [visibleCount, setVisibleCount] = useState(getInitialVisibleCount()); // 6 for desktop, 4 for mobile
  const [searchTerm, setSearchTerm] = useState(''); //search by title name
  const [sortOption, setSortOption] = useState('newest');   // for sorting because I think we mught needed it (like time yk)
  const [selectedTopic, setSelectedTopic] = useState(''); // sleect the topics 
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  // Get all unique topics from stories
  const allTopics = ['All', ...new Set(stories.map(story => story.topic))];
  
  // Calculate visible count based on screen size
  function getInitialVisibleCount() {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 768 ? 4 : 6;
    }
    return 6;
  }
  
  // Window resize handler
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      setVisibleCount(window.innerWidth <= 768 ? 4 : 6);
    }
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Filter and sort stories
  useEffect(() => {
    let result = [...stories]; // returns a shallow-copu of stories into result
    
    // Filter by topic
    if (selectedTopic && selectedTopic !== 'All') {
      result = result.filter(story => story.topic === selectedTopic); 
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(story => 
        story.title.toLowerCase().includes(term) || story.content.toLowerCase().includes(term)
      );
    }
    
    // Sort stories
    switch (sortOption) {
      case 'newest':
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'titleAZ':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'titleZA':
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    
    setFilteredStories(result);
  }, [stories, searchTerm, sortOption, selectedTopic]);
  
  // Load more handler
  const handleLoadMore = () => {
    const increment = windowWidth <= 768 ? 4 : 6;
    setVisibleCount(prevCount => prevCount + increment);
  };
  
  // Reset filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSortOption('newest');
    setSelectedTopic('');
    setVisibleCount(getInitialVisibleCount());
  };
  
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>All Stories</h2>
        
        <div className="gallery-filters">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search stories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-options">
            <select 
              value={selectedTopic} 
              onChange={(e) => setSelectedTopic(e.target.value)}
            >
              {allTopics.map(topic => (
                <option key={topic} value={topic}>{topic || 'All'}</option>
              ))}
            </select>
            
            <select 
              value={sortOption} 
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="titleAZ">Title (A-Z)</option>
              <option value="titleZA">Title (Z-A)</option>
            </select>
            
            <button onClick={handleResetFilters} className="reset-btn">Reset</button>
          </div>
        </div>
      </div>
      
      <div className="gallery-content">
        {filteredStories.length > 0 ? (
          <>
            <div className="gallery-grid">
              {filteredStories.slice(0, visibleCount).map(story => (
                <StoryCard 
                  key={story.id} 
                  story={story} 
                  onSelect={setSelectedStory} 
                />
              ))}
            </div>
            
            {visibleCount < filteredStories.length && (
              <div className="load-more">
                <button onClick={handleLoadMore}>Load More</button>
              </div>
            )}
          </>
        ) : (
          <div className="no-results">
            <p>No stories found. Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
      
      {selectedStory && (
        <Modal story={selectedStory} onClose={() => setSelectedStory(null)} />
      )}
    </div>
  );
}

export default StoryGallery;