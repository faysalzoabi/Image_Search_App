import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar'
import Search from './components/Search/Search';
import ImageResults from './components/ImageResults/ImageResults'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Search/>
        <ImageResults/>
      </div>
    );
  }
}

export default App;
