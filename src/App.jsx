import { useEffect, useState } from 'react';
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Project from './components/Project';
import Aos from 'aos';
import "aos/dist/aos.css";
import Navs from './components/Navs';
import Latest from './components/Latest';
import Preloader from './components/Preloader'; 
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init();
    // Simulate loading time (3 seconds)
    setTimeout(() => {
      setLoading(false); // Hide preloader after content is "loaded"
    }, 3000); 
  }, []);

  return (
    <>
      {loading ? (
        <Preloader /> 
      ) : (
        <>
          <Navs />
          <Intro />
          <About />
          <Latest />
          <Experience />
          <Project />
          <Contact />
          <Footer />
          
          {/* WhatsApp Group Icon */}
          <div className="whatsapp-icon" style={{backgroundColor: "transparent"}}>
          <a
              href="https://wa.me/07052169039" 
              target="_blank"
              rel="noopener noreferrer"
              style={{backgroundColor: "transparent"}} >
              <FaWhatsapp
                size={60}
                color="#e7008a"
                style={{backgroundColor: "transparent"}}
              />
            </a>
            <h4 className="text-lg text-white text" style={{backgroundColor: "transparent"}}>Chat with Us</h4> 
          </div>
        </>
      )}
    </>
  );
}

export default App;
