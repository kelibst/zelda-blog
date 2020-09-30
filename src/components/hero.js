import React from 'react';

export default function Hero() {
  return (
    <div className="hero container d-flex">
      <div className="hero-text col-6">
        <h4 className="text-dark font-weight-bold">Hello Hero</h4>
        <h3 className="text-dark">You are at the right place for some Zelda News</h3>
        <p className="text-secondary">Click anywhere on the header to change the theme</p>
      </div>
      <div className="col-6 hero-img" />
    </div>
  );
}
