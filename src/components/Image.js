import React, { Component } from 'react'


export default class Image extends Component{
    render(){
        const { src } = this.props
        return(
            <img className="image-container" src={ src } alt={ 'toto' }></img>
        )   
    }
}