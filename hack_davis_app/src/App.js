import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import About from './components/About'
import Stories from './components/Stories';
import StoryGallery from './components/StoryGallery';

import storiesData from './storiesData';
import FeaturedStoriesCarousel from './components/FeaturedStoriesCarousel';

function App() {
  // Filter for featured stories only
  const featuredStories = storiesData.filter(story => story.featured);
  
  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
        <section className="featured-section">
          <h2>Featured Stories</h2>
          <FeaturedStoriesCarousel stories={featuredStories} />
        </section>
        
        <section className="gallery-section">
          <StoryGallery stories={storiesData} />
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Stories Platform</p>
      </footer>
    </div>
  );
}

export default App;