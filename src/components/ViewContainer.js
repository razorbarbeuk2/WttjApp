import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';
import Quote from './Quote';
import Video from './Video';

export default class ViewContainer extends Component {
    constructor(props){
        super(props)

        this.state = {
            isHandle: false,
            scrollX: 0,
            gridWidth: 0,
            viewWidth: 0,
            colGridWidth: 0,
            rowGridWidth: 0
        }

    }

    componentDidMount(){
        this.gridWidth = document.getElementById('grid').offsetWidth
        this.viewWidth = document.getElementById('viewContainer').offsetWidth
    }

    onDown = (e) => {
        console.log('Down');
        if(!this.isHandle){
            this.setState({
                isHandle: true
            })
        }
    }

    onUp = (e) => {
        console.log('Up');
        if(this.isHandle){
            this.setState({
                isHandle: false
            })
        }
    }

    onMove = (e) => {
        if (!this.isHandle)
            return ;
        const {left, top} = this.extractPositionDelta(e);
        console.log(left);
        this.setState({
            scrollX: left
        })
        this.myRef.scrollTo(this.scrollX)
    }
    
    
    render(){
        const { data, col, row } = this.props
        
        this.colGridWdth = 100/col;
        this.rowGridWidth = 100/row;
        
        const gridContainerStyle = {
            gridTemplateColumns: 'repeat('+ data.length +', '+ this.colGridWdth +'%)',
            gridTemplateRows: 'repeat('+ row +', '+ this.rowGridWidth +'%)'
        }
        return (
            <section id="viewContainer" className="view-container">
                <div id="grid" className="grid-container" style={gridContainerStyle} onMouseDown={(e) => this.onDown(e)} onMouseUp={(e) => this.onUp(e)} onMouseMove={(e) => this.onMove(e)} ref={this.myRef}>
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
                </div>
            </section>
            )
        }
    }