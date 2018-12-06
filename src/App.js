import React, { Component } from 'react';
import './App.css';
import SelectBox from './features/select-box';

const data=[
    {id:'10',value:"value1"},
    {id:'11',value:"value2"},
    {id:'12',value:"value3"},
    {id:'13',value:"value4"}
];
class App extends  Component {

  render() {
    return (
      <div className="App">
        <h1>Cutsom select box using React </h1>
        <SelectBox items={data}/>
      </div>
    );
  }
}

export default App;
 