import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hideVIdeo } from '../../redux/actions/showVideo'

class closeButton extends Component{
    onClose(){
        this.props.onClosing()
    }

    render(){
        return(
            <div className="close-btn" onClick={() => {this.onClose()}}>
                <svg height={16} width={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <g fill="#ffffff">
                        <path d="M14.7,1.3c-0.4-0.4-1-0.4-1.4,0L8,6.6L2.7,1.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L6.6,8l-5.3,5.3 c-0.4,0.4-0.4,1,0,1.4C1.5,14.9,1.7,15,2,15s0.5-0.1,0.7-0.3L8,9.4l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L9.4,8l5.3-5.3C15.1,2.3,15.1,1.7,14.7,1.3z" fill="#ffffff"/>
                    </g>
                </svg>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onClosing: () => {
        dispatch(hideVIdeo())
    }
})

export default connect(null, mapDispatchToProps)(closeButton)