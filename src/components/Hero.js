import React from 'react';
import HeroImage from '../images/hero-image.png'

export default function Hero() {
  return (
      <main className='hero'>
          <img src={HeroImage} alt="Hero" className='image'/>
          <h1 className='hero-title'>Online Experiences</h1>
          <p className='hero-subtitle'> Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
      </main>
  );
}
