
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';
import Divices from './components/Divices';
import Fixed from './components/Fixed';


function App() {
  return (
    <>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
        <Header />
        <Hero />
        <Services />
        <Fixed/>
        <Divices />
        <Footer/>
      </div>
    </>
  );
}

export default App;