import React, { Component } from 'react';

import Sidebar from './componentes/Sidebar'
import Contest from './componentes/Contest'
import About from './componentes/About'
import Rules from './componentes/Rules'
import Modal from './componentes/Modal'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Contest />
        <About />
        <Rules />
        <Modal />
      </div>

    );
  }
}