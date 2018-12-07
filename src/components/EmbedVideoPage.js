import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CloseBtn from './CloseBtn'

export default class embedVideoPage extends Component{
    render(){
        const {business, title, subtitle, url, isShow } = this.props
        console.log(this.props)
        
        if(isShow){
            return(
                <div className="embed-video-page-container">
                    <CloseBtn />
                    <iframe title="video" width="560" height="315" src={url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className="infos-embed-video-container">
                       <ul>
                           <li><span>{business}</span></li>
                           <li><span>{title}</span></li>
                           <li><span>{subtitle}</span></li>
                       </ul>
                    </div>
                </div>
            )
        } else {
            return null
        }
        
    }

}

embedVideoPage.propTypes = {
    business: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    url: PropTypes.string,
    isShow: PropTypes.bool
}

