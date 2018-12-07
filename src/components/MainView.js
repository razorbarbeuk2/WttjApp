import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import Header from './Header'
import ViewContainer from './ViewContainer'
import Footer from './Footer'
import EmbedVideoPage from './EmbedVideoPage'
import data  from './../Data'

class MainView extends PureComponent {
    constructor(props){
        super(props)
    
        this.state = {
          device: '',
          colNumber: 0,
          rowNumber: 0
        }
        this._updateDevice = this._updateDevice.bind(this)
        this._updateDeviceCol = this._updateDeviceCol.bind(this)
    }

    componentWillMount(){
        this._updateDevice()
        window.addEventListener("resize", this._updateDevice);
    }

    componentWillUpdate(){
        this._updateDevice()
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this._updateDevice);
    }

    _updateDevice(){
        let body = document.body.offsetWidth;
        let size;
        if (body < 575.98) size = 'xs'
        else if (body < 767.98) size = 'sm'
        else if (body < 991.98) size = 'md'
        else if (body < 1199.98) size = 'lg'
        else size = 'xl'
        this.setState({device: size}, () => {
            this._updateDeviceCol()
        })
    }

    _updateDeviceCol(){
        if(this.state.device === 'xs' || this.state.device === 'sm')
            this.setState({ colNumber: 1, rowNumber: 1 })
        else
            this.setState({ colNumber: 3, rowNumber: 2 })
        return ;
    }
    
    render(){
        // const { title, subtitle, url, isShow } = this.props
        return(
            <React.Fragment>
                <Header title={data.title}/>
                <ViewContainer data={data} col={this.state.colNumber} row={this.state.rowNumber} device={this.state.device}/>
                <Footer />
                <EmbedVideoPage {...this.props}/>  
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    const { title, subtitle, url, isShow } = state.showVideoReducer
    return {
        isShow,
        title,
        subtitle,
        url
    }
}

export default connect(mapStateToProps)(MainView)