import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initPos } from '../redux/actions/moveScreen';
import Image from './Image';
import Quote from './Quote';
import Video from './Video';

const calculatePosition = (gridWidth, offsetView) => {
    console.log("Hello calculate")
    let iterator = 0
    let tabPos = []
    tabPos.push(iterator)
    while (iterator < gridWidth){
        iterator += offsetView
        tabPos.push(iterator)
    }
    tabPos.push(gridWidth)
    return tabPos
}

class ViewContainer extends Component {
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
        this.props.onInitPos(this.gridWidth, 0, calculatePosition(this.gridWidth, this.viewWidth), this.scrollX)
    }

    onDown = (e) => {
        console.log('Down');
        if(!this.isHandle){
            this.setState({
                isHandle: true,
                scrollPosition: 0
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

const mapStateToProps = (state) => ({
    scrollX: state.moveReducer.scrollPos
})

const mapDispatchToProps = (dispatch) => ({
    onInitPos: (gridWidth, index, tabPos, scrollPos) => {
        dispatch(initPos(gridWidth, index, tabPos, scrollPos))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer)

