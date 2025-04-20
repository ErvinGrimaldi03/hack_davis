import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import About from './components/About'
import Stories from './components/Stories';
import StoryGallery from './components/StoryGallery';
import BufferHeader from './components/BufferHeader';
import storiesData from './storiesData';
import Resources from './components/Resources';
import FeaturedStoriesCarousel from './components/FeaturedStoriesCarousel';
import { storiesEvidenti } from './components/storiesData'; 


function App() {
  // Filter for featured stories only
  const featuredStories = storiesData.filter(story => story.featured);
  
  return (
    <div className="App">
      <NavBar></NavBar>
      <main>
        <section className='about-section'>
          <BufferHeader />
          <About/>
        </section>
        <section className="featured-section">
          <FeaturedStoriesCarousel stories={storiesEvidenti} />
        </section>
        
        <section className="gallery-section">
          <StoryGallery stories={storiesData} />
        </section>
        <section className='resources'>
          <Resources/>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Stories Platform</p>
      </footer>
    </div>
  );
}

export default App;