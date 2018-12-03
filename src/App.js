import React, { Component } from 'react';
import './styles/App.scss';
import Header from './components/Header'
import ViewContainer from './components/ViewContainer';

class App extends Component {
  render() {
    return (
        <Header />
        <ViewContainer />
    );
  }
}

export default App;
