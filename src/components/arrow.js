import React, { Component } from 'react';


export default class Arrow extends Component {
    render(){
        if(this.props.sens === 'left'){
            return(
                <svg height={this.props.height} width={this.props.width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	                <g fill={this.props.color} stroke={this.props.color} strokeWidth="1">
		                <line fill="none" strokeLinecap="round" x1="0.5" x2="11.5" y1="6" y2="6"/>
		                <polyline fill="none" points="4.5 10 0.5 6 4.5 2" stroke={this.props.color} strokeLinecap="round"/>
	                </g>
                </svg>
            )
        } else if(this.props.sens === 'right'){
            return (
                <svg height={this.props.height} width={this.props.width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	                <g fill={this.props.color} stroke={this.props.color} strokeWidth="1">
		                <line fill="none" strokeLinecap="round" x1="11.5" x2="0.5" y1="6" y2="6"/>
		                <polyline fill="none" points="7.5 2 11.5 6 7.5 10" stroke={this.props.color} strokeLinecap="round"/>
	                </g>
                </svg>
            )
        }
    }
}