import './App.css';
import Aboutme from './components/Aboutme/Aboutme';
import Banner from './components/Banner/Banner';
import Casestudy from './components/Casestudy/Casestudy';
import Contact from './components/Contact/Contact';
import Copyright from './components/Copyright/Copyright';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Proud from './components/Proud/Proud';
import Services from './components/Sevices/Services';
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Header />
      <Banner/>
      <Aboutme/>
      <Services/>
      <Casestudy/>
      <Portfolio/>
      <Testimonials/>
      <Proud/>
      <Contact/>
      <Footer/>
      <Copyright/>
    </>
  );
}

export default App;
