import React, { Component } from 'react'


export default class Video extends Component{
    render(){
        const { src } = this.props
        return(
            <img className="image-container" src={ src } alt={ 'toto' }></img>
        )   
    }
}