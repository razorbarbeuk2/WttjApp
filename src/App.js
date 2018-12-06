import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './redux/reducers'
import './styles/App.scss';
import Header from './components/Header'
import ViewContainer from './components/ViewContainer'
import Footer from './components/Footer'
import Data from './Data'

const store = createStore(rootReducer)

class App extends PureComponent {
  constructor(props){
    super(props)

    this.state = {
      device: '',
      colNumber: 0,
      rowNUmber: 0
    }
    this._updateDevice = this._updateDevice.bind(this)

  }

  componentWillMount(){
    this._updateDevice();
  }

  componentDidMount(){
    window.addEventListener("resize", this._updateDevice);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this._updateDevice);
  }

  _updateDevice(){
    let body = document.body.offsetWidth;
    if (body < 575.98)
      this.setState({ device : 'xs' })
    else if (body < 767.98)
      this.setState({ device : 'sm' })
    else if (body < 991.98)
      this.setState({ device : 'md' })
    else if (body < 1199.98)
      this.setState({ device : 'lg' })
    else 
      this.setState({ device : 'xl' })
    this._updateDeviceCol();  
  }

  _updateDeviceCol(){
    if(this.state.device === 'xs' || this.state.device === 'sm')
      this.setState({ colNumber: 1, rowNUmber: 1 })
    else
      this.setState({ colNumber: 3, rowNUmber: 2 })
    return ;
  }

  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header />
          <ViewContainer data={Data} col={this.state.colNumber} row={this.state.rowNUmber}/>
          <Footer />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
