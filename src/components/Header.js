import React, { Component } from 'react';
import Arrow from './Arrow';
import './styles/App.scss';
import Logo from './assets/images/wttj-square_green.jpg';


export default class Header extends Component {
    render() {
        return (
                <header className="app-header">
                    <img src={Logo} width={80} height={80} alt="Logo"/>
                    <div className="nav-arrow">
                        <ul>
                            <li>
                                <Arrow direction='left' width={18} height={18} color={'#FFFFFF'}/>
                            </li>
                            <li>
                                <Arrow direction='right' width={18} height={18} color={'#FFFFFF'}/>
                            </li>
                        </ul>
                    </div>
                </header>
            );
    }
}
    