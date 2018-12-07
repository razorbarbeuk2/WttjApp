import React, { Component } from 'react';


export default class Arrow extends Component {
    render(){
        if(this.props.direction === 'left'){
            return(
                <svg height={this.props.height} width={this.props.width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <g fill={this.props.color} stroke={this.props.color} strokeWidth="1">
                        <polyline fill="none" points="8.5 11.5 2.5 6 8.5 0.5" stroke={this.props.color} strokeLinecap="round"/>
                    </g>
                </svg>
            )
        } else if(this.props.direction === 'right'){
            return (
                <svg height={this.props.height} width={this.props.width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	                <g fill={this.props.color} stroke={this.props.color} strokeWidth="1">
		                <polyline fill="none" points="3.5 0.5 9.5 6 3.5 11.5" stroke={this.props.color} strokeLinecap="round"/>
	                </g>
                </svg>
            )
        }
    }
}