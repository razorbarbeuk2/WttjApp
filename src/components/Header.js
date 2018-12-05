import React, { Component } from 'react';
import { connect } from 'react-redux';
import Arrow from './Arrow';
import Logo from './../assets/images/wttj-square_green.jpg';
import { moveLeft, moveRight } from '../redux/actions/moveScreen';

class Header extends Component {

    moveLeft = (e) => {
        this.props.onMoveLeft()
    }

    moveRight = (e) => {
        this.props.onMoveRight()
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

const mapDispatchToProps = dispatch => ({
    onMoveLeft: () => {
        dispatch(moveLeft())
    },
    onMoveRight: () => {
        dispatch(moveRight())
    }
})

export default connect(null, mapDispatchToProps)(Header)