import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <p>Welcome to my static site template built with React!</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;