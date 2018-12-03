import React, { Component } from 'react';
import Image from './Image';
import Quote from './Quote';
import Video from './Video';

export default class ViewContainer extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        const {data, col, row} = this.props
        return(
            <div>
                {data.map(t => () => {
                        switch (t.type) {
                            case 'image': 
                                return (<Image src={t.value} />);
                            case 'video': 
                                return (<Video src={t.value} />);
                            case 'quote':
                                return (<Quote text={t.value} />);
                            default: 
                                return (<Image src="https://media.giphy.com/media/3o85xwxr06YNoFdSbm/giphy.gif" />);
                        }
                    })
                }
            </div>)
        }
    }