import React, { Component } from 'react'
import PropTypes from 'prop-types'
import zoom from '../assets/images/zoom-2.png'

export default class Image extends Component{
    render(){
        const { src } = this.props
        const ImgStyle = {
            backgroundImage: 'url(' + src + ')',
        }

        const imgZoom = {
            backgroundImage: 'url(' + zoom + ')',
        }
        
        return(
            <div className="image-container">
                <div className="background-content" style={ImgStyle}></div>
                <div className="zoom" style={imgZoom}></div>
            </div>
        )   
    }
}

Image.propTypes = {
    src: PropTypes.string,
}    
