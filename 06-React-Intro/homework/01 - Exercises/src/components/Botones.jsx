import React, { Component } from 'react';
import { alerts } from './Bienvenido.jsx';

export default class Botones extends Component {
  render() {
    return (
      <div>
        <button onClick={() => alert(alerts.m1)}>Módulo 1</button>
        <button onClick={() => alert(alerts.m2)}>Módulo 2</button>
      </div>
    );
  }
}
