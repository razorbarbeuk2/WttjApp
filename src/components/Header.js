import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Arrow from './Arrow';
import logo from '../../src/assets/images/wttj-square_green.jpg'
import { moveLeft, moveRight, onImpose } from '../redux/actions/moveScreen';

const RIGHT = 'right'
const LEFT = 'left'

const posIndexRange = (scrollPos, tabPos) => {
    let index = tabPos.reduce((prev, curr) => (Math.abs(curr - scrollPos) < Math.abs(prev - scrollPos) ? curr : prev));
    return tabPos.findIndex(v => v === index);
} 

const posLost = (scrollPos, tabPos, dir) => {
    let index = 0;
    while (index < tabPos.length){
        if(scrollPos === tabPos[index])
            return index
        index++    
    }
    index = posIndexRange(scrollPos, tabPos)
    return (dir === LEFT) ? index + 1 : index;
}

class Header extends Component {
    moverMotherShip = (dir, scrollPosCurr, tabPos) => {
        let value = posLost(scrollPosCurr, tabPos, dir)
        this.props.onImposeIndex(value, scrollPosCurr)
    }

    moveLeft = (e) => {
        const { tabPos } = this.props
        let scrollPosCurr = document.getElementById('grid').scrollLeft
        if(scrollPosCurr > 0){
            this.moverMotherShip(LEFT, scrollPosCurr, tabPos)       
            this.props.onMoveLeft()
        }
        e.preventDefault()
    }

    moveRight = (e) => {
        const { tabPos, index } = this.props
        let scrollPosCurr = document.getElementById('grid').scrollLeft
        if(index < tabPos.length){
            this.moverMotherShip(RIGHT, scrollPosCurr, tabPos)
            this.props.onMoveRight()
        }
        e.preventDefault()   
    }

    render() {
        const { title } = this.props

        return (
                <header className="app-header">
                    <div className="header-container">
                        <div>
                            <img src={logo} width={50} height={50} alt="Logo"/>
                            <span className="title">{title}</span>    
                        </div>
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
    title: PropTypes.string,
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
        dispatch(moveLeft())
    },
    onMoveRight: () => {
        dispatch(moveRight())
    },
    onImposeIndex: (index, scrollPos) => {
        dispatch(onImpose(index, scrollPos))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)