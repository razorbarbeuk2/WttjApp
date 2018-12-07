import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import smallRight from '../assets/images/small-right.png'

class Footer extends Component {
    constructor(props){
        super(props)

        this.state = {
            posLine: 0,
            viewWidth: 0,
            width: null,
            height: null
        }
        this._updatePos = this._updatePos.bind(this)
        this._element = React.createRef();
    }

    componentDidMount(){
        this.setState = ({
            viewWidth: document.getElementById('viewContainer').clientWidth
        })
    }

    shouldComponentUpdate(nextState){
        return (this.state.width !== nextState.width || this.state.height !== nextState.height)
    }

    _updatePos(){
        
    }

    render(){
        const { gridWidth, scrollPos } = this.props
        const linePos = {
            '&:after':{
                width: this.state.posLine
            }
        }

        return (
            <footer>
                <div className="footer-line" ref={this._element}></div>
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

Footer.propTypes = {
    gridWidth: PropTypes.number,
    scrollPos: PropTypes.number
}

const mapStateToProps = (state) => {
    const { scrollPos, gridWidth } = state.moveReducer
    return {
        scrollPos,
        gridWidth
    }
}

export default connect(mapStateToProps)(Footer)