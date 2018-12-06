import React, { Component } from 'react';
import smallRight from '../assets/images/small-right.png'

export default class Footer extends Component {
    render(){
        return (
            <footer>
                <div className="footer-line"></div>
                <div className="footer-container">
                    <img src="https://cdn.welcometothejungle.co/wttj-front/assets/images/logos/wttj-long.svg?v=9d42bd524a64e8477f5e3a087b7add89" alt="logo" />
                    <div>
                        <span>Voir le profil</span>
                        <img src={smallRight} alt="logo" />
                    </div>
                </div>
            </footer>
        );
    }
}