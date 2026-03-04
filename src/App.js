import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import PriceList from './components/Pricelist';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      
      <Navbar/>
      <Home/>
      <Services/>
      <PriceList/>
      <Booking/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
