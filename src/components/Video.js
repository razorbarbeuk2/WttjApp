import React, { Component } from 'react'


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

                </div>
            </div>
        )   
    }
}