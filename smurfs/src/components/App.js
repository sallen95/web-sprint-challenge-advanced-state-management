import React, { Component } from "react";

import SmurfVillage from './SmurfVillage';
import SmurfForm from './SmurfForm';

import "./App.css";



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfForm/>
        <SmurfVillage/>
      </div>
    );
  }
}


export default App;
