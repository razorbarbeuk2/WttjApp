import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initPos, onImpose } from '../redux/actions/moveScreen';
import Image from './Image';
import Quote from './Quote';
import Video from './Video';

const calculatePosition = (gridWidth, offsetView) => {
    let iterator = 0
    let tabPos = []
    offsetView = (offsetView*101)/100;
    while (iterator < (gridWidth - offsetView)){
        tabPos.push(Math.round(iterator))
        iterator += offsetView
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
            rowGridWidth: 0,
        }
    }

    componentDidMount(){
        this.setState({
            gridWidth: document.getElementById('grid').scrollWidth,
            viewWidth: document.getElementById('viewContainer').clientWidth
        }, () => {
            this.props.onInitPos(this.state.gridWidth, 0, calculatePosition(this.state.gridWidth, this.state.viewWidth), 0)
        })
    }

    componentDidUpdate(){
        const { index, tabPos, scrollPos } = this.props
        console.log('POS: ' + index)
        document.getElementById('grid').scroll({
            top: 0, 
            left: tabPos[index],
            behavior: 'smooth'
        });
    }
    
    render(){
        const { data, col, row, device, index } = this.props
        
        this.colGridWdth = 100/col;
        this.rowGridWidth = 100/row;
        const heightContainerStyle = {minHeight: 'calc(700px - 110px)'}
        if(device === 'xs' || device === 'sm')
            heightContainerStyle.minHeight = 'calc(100vh - 110px)'
            
        const gridContainerStyle = {
            gridTemplateColumns: 'repeat('+ data.length +', '+ this.colGridWdth +'%)',
            gridTemplateRows: 'repeat('+ row +', '+ this.rowGridWidth +'%)'
        }
        
        return (
            <section id="viewContainer" className="view-container">
                <div 
                    id="grid" 
                    className="grid-container" 
                    style={{...heightContainerStyle, ...gridContainerStyle}} 
                    // onMouseDown={(e) => this.onDown(e)} 
                    // onMouseUp={(e) => this.onUp(e)} 
                    // onMouseMove={(e) => this.onMove(e)}
                    // onScroll={() => this.scrollPos()}
                    // ref={this.grid}
                >
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

ViewContainer.propTypes = {
    data: PropTypes.array,
    device: PropTypes.string,
    col: PropTypes.number,
    row: PropTypes.number,
    index: PropTypes.number,
    scrollPos: PropTypes.number,
    tabPos: PropTypes.array
}

const mapStateToProps = (state) => {
    const { scrollPos, index, tabPos } = state.moveReducer
    return {
        index,
        tabPos,
        scrollPos
    }
}

const mapDispatchToProps = (dispatch) => ({
    onInitPos: (gridWidth, index, tabPos, scrollPos) => {
        dispatch(initPos(gridWidth, index, tabPos, scrollPos))
    },
    onImposeIndex: (index, scrollPos) => {
        dispatch(onImpose(index, scrollPos))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer)

