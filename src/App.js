import React, { Component } from 'react';
import './App.css';
import MultiFileUpload from './MultiFileUpload';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MultiFileUpload />
        </header>
      </div>
    );
  }
}

export default App;
