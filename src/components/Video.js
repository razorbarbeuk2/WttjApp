import React, { Component } from 'react'


export default class Video extends Component{
    render(){
        const { src } = this.props
        const ImgStyle = {
            backgroundImage: 'url(' + src + ')',
        } 
        return(
            <div className="video-container" style={ImgStyle}></div>
        )   
    }
}