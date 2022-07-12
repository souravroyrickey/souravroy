
import './App.css';
import Profile from './PortfolioComponents/Home/Profile';
import About from './PortfolioComponents/About/About';
import content from './PortfolioComponents/Company/Content';

import Contact from './PortfolioComponents/Contact/Contact';
import Nav from './PortfolioComponents/Nav/Nav';
import Projects from './PortfolioComponents/Projects/Projects';
import Skills from './PortfolioComponents/Skills/Skills';
import Footer from './PortfolioComponents/Footer/Footer';
import Company from './PortfolioComponents/Company/Company';
import Testimonial from './PortfolioComponents/Testimonial/Testimonial';
function App() {
 return (
     <div className='App'>
        
         <Profile/>
         <Nav/>
         <About/>
         <Skills/>
         <Company/>
         <Testimonial/>
         <Contact/>
         <Footer/>
     </div>
    
 );
}

export default App;
