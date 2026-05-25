import React from 'react';
import Carousel from '../components/Carousel';
import PizzaList from '../components/PizzaList';

function Home() {
  return (
    <div className="home-page">
      <Carousel />
      <PizzaList />
    </div>
  );
}

export default Home;
