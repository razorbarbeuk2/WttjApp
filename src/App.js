import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducers'
import MainView from '../src/components/MainView'
import './styles/App.scss';


const store = createStore(rootReducer)

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}
