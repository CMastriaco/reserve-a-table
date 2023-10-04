import './App.css';
import Nav from './Nav';
import Header from './Header';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import BookingPage from './BookingPage';
import Testimonials from './Testimonials';
import About from './About';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <BookingPage />
      <Nav />
      <Header />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default App;
