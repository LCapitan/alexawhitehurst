import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { connect } from 'react-redux';
import { toggleMenu } from '../../actions';

import LogoNeg from "../logo/LogoNeg";

class Header extends Component {

    menuButton = React.createRef();

    state = {
        isOpen: false
    };

    handleMenuClick = () => {
        this.props.dispatch(toggleMenu());

        // this.setState({ isOpen : !this.state.isOpen}, () => {
        //     this.menuButton.blur();
        // });
    }

    render () {

        // console.log(this.props);

        const {
            menuIsOpen: isOpen
        } = this.props

        return (
            <header className="App-header">
                <ul>
                    <li>
                        <button id="menuButton" ref={this.menuButton} className={isOpen ? 'MenuButton MenuIsOpen' : 'MenuButton' } onClick={this.handleMenuClick}>
                            <span className={isOpen ? 'CloseMenu' : 'OpenMenu' }></span>
                        </button>
                    </li>
                    <li>
                        <Link className="HomeBtn" to="/">
                            <LogoNeg/>
                        </Link>
                    </li>
                </ul>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(
    mapStateToProps
)(Header);