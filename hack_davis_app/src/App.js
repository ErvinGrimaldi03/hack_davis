import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import About from './components/About'
import Stories from './components/Stories';
import FeaturedStoriesCarousel from './components/FeaturedStoriesCarousel';

function App() {
  return (
    <>
    <div className="App">
      <NavBar />

    </div>
    <section id="about">
      <About/>
    </section>

    <Stories/>

    </>

    
  );
}

export default App;
