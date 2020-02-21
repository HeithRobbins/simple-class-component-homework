import React, { Component } from 'react';

import NavWrapper from "./navigation";

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>HELLO WORLD</h1>
        <NavWrapper />
      </div>
    );
  }
}
