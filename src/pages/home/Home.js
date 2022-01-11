import React from 'react';
import Calculator from '../../components/calculator/Calculator';
import './Home.css';

function Home() {
  return (
    <div className="homepage">
      <h1>Lets Do Some Math</h1>
      <Calculator />
    </div>
  );
}

export default Home;
