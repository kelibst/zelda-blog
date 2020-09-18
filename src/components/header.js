/* eslint-disable */
import React, { Component } from 'react';
import Hero from './hero';
import Navbar from './navbar';

export default class Header extends Component {
  state={
    bg: 'khaki',
  }

  bgs = ['khaki', 'pink', 'bg-orange', 'aqua', 'lightblue', 'lightcoral'];

  handleWheel = e => {
    if (e.pageY > 200) {
      this.setState({
        bg: this.bgs[Math.abs(Math.round((Math.random() * 10) - 5))],
      });
    }
  }

  render() {
    return (
      <div className="header" style={{ background: this.state.bg }} onClick={this.handleWheel}>
        <div className="container">
          <Navbar />
          <Hero />
        </div>

      </div>
    );
  }
}
