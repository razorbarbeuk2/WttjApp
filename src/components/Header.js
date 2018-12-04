import React, { Component } from 'react';
import Arrow from './Arrow';
import Logo from './../assets/images/wttj-square_green.jpg';

export default class Header extends Component {
    render() {
        return (
                <header className="app-header">
                    <div className="header-container">
                        <img src={Logo} width={50} height={50} alt="Logo"/>
                        <div className="nav-arrow">
                            <ul>
                                <li>
                                    <Arrow direction='left' width={10} height={10} color={'#FFFFFF'}/>
                                </li>
                                <li>
                                    <Arrow direction='right' width={10} height={10} color={'#FFFFFF'}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            );
    }
}
    