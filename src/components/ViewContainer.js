import React, { Component } from 'react';
import Image from './Image';
import Quote from './Quote';
import Video from './Video';

export default class ViewContainer extends Component {
    render(){
        const { data } = this.props
        return (
            <section className="view-container">
                {
                    data.map((t, index) => {
                        switch (t.type) {
                            case 'image': 
                                return <Image src={t.value} key={index}/>
                            case 'video': 
                                return <Video src={t.value} key={index}/>
                            case 'quote':
                                return <Quote text={t.value} key={index}/>
                            default: 
                                return <Image src="https://media.giphy.com/media/3o85xwxr06YNoFdSbm/giphy.gif" key={index}/>
                        }
                    })
                }
            </section>
        )
    }
}