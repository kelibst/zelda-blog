import React from 'react';
import Hero from './hero';
import Navbar from './navbar';

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Navbar />
        <Hero />
      </div>

    </div>
  );
}
