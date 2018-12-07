import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import CloseBtn from './CloseBtn'

export default class embedVideoPage extends Component{
    render(){
        const {business, title, subtitle, url, isShow } = this.props
        const opts = {
            width: '560',
            height: '315',
            playerVars: {
              autoplay: 1
            }
        };
        
        if(isShow){
            return(
                <div className="embed-video-page-container">
                    <CloseBtn />
                    <YouTube containerClassName="youtube" videoId={url} opts={opts} onReady={this._onReady} />
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

