import React from 'react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/NewsLetter';
import Token from './components/Token';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Token />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
