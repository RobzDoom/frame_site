import React, { Component } from 'react';
import Header from './header'
import Body from './body'

export default class App extends Component {
  render() {
    return (
      <div className = 'app'>
          <Header />
          < Body />
      </div>
    );
  }
}
