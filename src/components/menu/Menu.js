import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleMenu } from '../../actions';
import './styles.scss';

class Menu extends Component {


    handleMenuClick = () => {
        this.props.dispatch(toggleMenu());
    }

    render() {
        // console.log(this.props);

        const {
            menuIsOpen: isOpen
        } = this.props

        return (
            <nav className={isOpen ? 'Nav MenuIsOpen' : 'Nav'}>
                <div className="NavWrapper">
                    <div className="NavMain">
                        <h2>Menu</h2>
                        <ul>
                            <li><Link to="/" onClick={this.handleMenuClick}>Home</Link></li>
                            <li><Link to="/bio" onClick={this.handleMenuClick}>Biography</Link></li>
                            <li><Link to="/collections" onClick={this.handleMenuClick}>Collections</Link></li>
                            <li><Link to="/techpacks" onClick={this.handleMenuClick}>TechPacks</Link></li>
                            <li><Link to="/" onClick={this.handleMenuClick}>Sketches</Link></li>
                            <li><Link to="/" onClick={this.handleMenuClick}>Moodboards</Link></li>
                            <li><Link to="/contact" onClick={this.handleMenuClick}>Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="NavImg">
                    <figure></figure>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(
    mapStateToProps
)(Menu);