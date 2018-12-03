import React, { Component } from 'react';
import './styles/App.scss';
import Header from './components/Header'
import ViewContainer from './components/ViewContainer';
import Data from './Data';

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Header />
          <ViewContainer data={Data}/>
        </React.Fragment>
    );
  }
}

export default App;
