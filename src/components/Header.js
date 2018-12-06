import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Arrow from './Arrow';
import Logo from './../assets/images/wttj-square_green.jpg';
import { moveLeft, moveRight, onImpose } from '../redux/actions/moveScreen';

const RIGHT = 'right'
const LEFT = 'left'

const posLost = (scrollPos, tabPos, dir) => {
    let index = 0;
    let middlePos = Math.round(tabPos[1]/2)
    // console.log(middlePos)
    // console.log(tabPos)
    // console.log(scrollPos)
    while (index < tabPos.length) {
        if(scrollPos === tabPos[index])
            return index
        if(scrollPos > tabPos[index] && scrollPos < (tabPos[index] + tabPos[1])){
            // console.log('BITCH')
            break;
        }
        index++
        
    }
    if ((dir === LEFT) && (scrollPos > tabPos[index]  && scrollPos > Math.round(tabPos[index] + middlePos))){
        console.log('INDEX :' )
        return index + 1
    }
    if ((dir === RIGHT) && (tabPos[index] < scrollPos && scrollPos < tabPos[index + 1]))
        return index
    return 0
}

class Header extends Component {
    constructor(props){
        super(props)
    }

    moveLeft = (e) => {
        const { index, tabPos, gridWidth } = this.props
        let scrollPos = document.getElementById('grid').scrollLeft
        if(scrollPos > 0){
            let value = posLost(scrollPos, tabPos, LEFT)
            console.log('Value :' + value)
            if (value > 0)
                this.props.onImposeIndex(value)
            if (index > 0)    
                this.props.onMoveLeft()
        }
        e.preventDefault()
    }

    moveRight = (e) => {
        const { tabPos, index } = this.props
        let scrollPos = document.getElementById('grid').scrollLeft
        if(index < tabPos.length){
            let value = posLost(scrollPos, tabPos, RIGHT)
            if (value > 0)
                this.props.onImposeIndex(value)
            this.props.onMoveRight()
        }
        e.preventDefault()   
    }

    render() {
        return (
                <header className="app-header">
                    <div className="header-container">
                        <img src={Logo} width={50} height={50} alt="Logo"/>
                        <div className="nav-arrow">
                            <ul>
                                <li onClick={(e) => this.moveLeft(e)}>
                                    <Arrow direction='left' width={10} height={10} color={'#FFFFFF'}/>
                                </li>
                                <li onClick={(e) => this.moveRight(e)}>
                                    <Arrow direction='right' width={10} height={10} color={'#FFFFFF'}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            );
    }
}

Header.propTypes = {
    gridWidth: PropTypes.number,
    scrollPos: PropTypes.number,
    index: PropTypes.number,
    tabPos: PropTypes.array
}

const mapStateToProps = (state) => {
    const { gridWidth, scrollPos, index, tabPos } = state.moveReducer
    return {
        index,
        tabPos,
        scrollPos,
        gridWidth
    }
}

const mapDispatchToProps = dispatch => ({
    onMoveLeft: () => {
        console.log('LEFT')
        dispatch(moveLeft())
    },
    onMoveRight: () => {
        console.log('RIGHT')
        dispatch(moveRight())
    },
    onImposeIndex: (index) => {
        dispatch(onImpose(index))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)