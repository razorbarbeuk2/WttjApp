import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Video extends Component{
    render(){
        const { src } = this.props
        const ImgStyle = {
            backgroundImage: 'url(' + src + ')',
        }
        return(
            <div className="video-container" style={ImgStyle}>
                <div className="background-content" style={ImgStyle}></div>
                <div className="play-container">
                    <div className="play-button"></div>
                    <p></p>
                </div>
            </div>
        )   
    }
}

Video.propTypes = {
    src: PropTypes.string,
}