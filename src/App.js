import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import Gallery from './components/Gallery';
import Donation from './components/Donation';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Activities />
      <Gallery />
      <Donation />
      <Quote />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;