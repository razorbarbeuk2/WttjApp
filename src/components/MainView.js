import React, { Component } from 'react'
import { connect } from 'react-redux';
import ViewContainer from './ViewContainer'
import Header from './common/Header'
import Footer from './common/Footer'
import EmbedVideoPage from './common/EmbedVideoPage'
import data  from './../Data'

class MainView extends Component {
    constructor(props){
        super(props)
    
        this.state = {
          device: '',
          colNumber: 3,
          rowNumber: 2
        }
    }

    updateCol = () => {
        if(this.state.device === 'xs' || this.state.device === 'sm')
            this.setState({ colNumber: 1, rowNumber: 1 })
        else     
            this.setState({ colNumber: 3, rowNumber: 2 })
    }

    updateDevice = () => {
        let body = document.body.offsetWidth;
        let size
        if (body < 575.98) size = 'xs'
        else if (body < 767.98) size = 'sm'
        else if (body < 991.98) size = 'md'
        else if (body < 1199.98) size = 'lg'
        else size = 'xl'
        this.setState({ device: size }, () => this.updateCol())
    }

    componentDidMount(){
        this.updateDevice()
        window.addEventListener("resize", this.updateDevice);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDevice);
    }
    
    render(){
        return(
            <React.Fragment>
                <Header title={data.title}/>
                <ViewContainer data={data} col={this.state.colNumber} row={this.state.rowNumber} device={this.state.device}/>
                <Footer />
                <EmbedVideoPage {...this.props}  business={data.title}/>  
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