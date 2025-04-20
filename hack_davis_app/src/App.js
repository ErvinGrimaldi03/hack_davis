import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import About from './components/About'

function App() {
  return (
    <>
    <div className="App">
      <NavBar>
        
      </NavBar>

    </div>
    <section id="about">
      <About></About>
    </section>
    </>
    
  );
}

export default App;
