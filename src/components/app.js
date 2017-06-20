import React, { Component } from 'react';
import Header from './header'

export default class App extends Component {
  render() {
    return (
      <div className = 'app'>
        <div>React simple starter</div>
        <Header />
      </div>
    );
  }
}
