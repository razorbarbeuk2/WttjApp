import React, { Component } from 'react'
import PropTypes from 'prop-types'
import play from '../assets/images/triangle-right.png'

export default class Video extends Component{
    render(){
        const { src, title, subtitle } = this.props
        const imgStyle = (src) => ({
            backgroundImage: 'url(' + src + ')',
        })

        return(
            <div className="video-container" style={imgStyle(src)}>
                <div className="background-content" style={imgStyle(src)}></div>
                <div className="play-container">
                    <div className="play-button" style={imgStyle(play)}></div>
                    <div>
                        <p className="title-video">{title}</p>
                        <p className="subtitle-video">{subtitle}</p>
                    </div>
                </div>
            </div>
        )   
    }
}

Video.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
}