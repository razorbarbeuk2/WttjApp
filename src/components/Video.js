import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { showVideo } from '../redux/actions/showVideo'
import play from '../assets/images/triangle-right.png'


class Video extends Component{
    _onShow(title, subtitle, url){
        this.props.onShowBox(title, subtitle, url)
    }

    render(){
        const { dataVideo } = this.props
        const imgStyle = (src) => ({
            backgroundImage: 'url(' + src + ')',
        })

        return(
            <div className="video-container" style={imgStyle(dataVideo.value)}>
                <div className="background-content" style={imgStyle(dataVideo.value)} onClick={() => this._onShow(dataVideo.title, dataVideo.subtitle, dataVideo.url)}></div>
                <div className="play-container">
                    <div className="play-button" style={imgStyle(play)}></div>
                    <div>
                        <p className="title-video">{dataVideo.title}</p>
                        <p className="subtitle-video">{dataVideo.subtitle}</p>
                    </div>
                </div>
            </div>
        )   
    }
}

Video.propTypes = {
    dataVideo: PropTypes.object,
}

const mapDispatchToProps = (dispatch) => ({
    onShowBox: (title, subtitle, url) => {
        dispatch(showVideo(title, subtitle, url))
    }
})

export default connect(null, mapDispatchToProps)(Video)