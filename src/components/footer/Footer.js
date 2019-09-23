import React, { Component } from 'react';
import Logo from '../../components/logo/Logo';
import LinkedIn from '../../components/logo/LinkedIn';
import Instagram from '../../components/logo/Instagram';
import Facebook from '../../components/logo/Facebook';
import './styles.scss';
import { Link } from 'react-router-dom';
import { Parallax } from "react-scroll-parallax";
import { withController } from "react-scroll-parallax/cjs";

class Footer extends Component {

    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();
    };

    render() {
        return (
            <div className="Raised">
                <Parallax className="ParallaxWrapper" y={[25, 0]} tagOuter="span">
                    <div className="Footer">
                        <div className="FooterBranding">
                            <Logo/>
                            <h5>Alexa Whitehurst</h5>
                        </div>

                        <div className="FooterWrapper">
                            <div className="FooterMenu Desktop">
                                <div>
                                    <Link className="Link" to="/collections">Collections</Link>
                                </div>
                                <div className="FooterMenuSocial">
                                    <div>
                                        <a href="https://www.linkedin.com/in/alexa-whitehurst" target="_blank"><LinkedIn/></a>
                                        <a href="https://www.instagram.com/alexa_white_designs/" target="_blank"><Instagram/></a>
                                        <a href="https://www.facebook.com/alexaschachte" target="_blank"><Facebook/></a>
                                    </div>
                                    <span>Stay In Touch</span>
                                </div>
                                <div>
                                    <Link className="Link" to="/contact">Contact</Link>
                                </div>
                            </div>

                            <div className="FooterMenu Mobile">
                                <div>
                                    <a className="Link" href="/collections">Collections</a>
                                </div>
                                <div>
                                    <a className="Link" href="/contact">Contact</a>
                                </div>
                                <div className="FooterMenuSocial">
                                    <div>
                                        <a href="https://www.linkedin.com/in/alexa-whitehurst" target="_blank"><LinkedIn/></a>
                                        <a href="https://www.instagram.com/alexa_white_designs/" target="_blank"><Instagram/></a>
                                        <a href="https://www.facebook.com/alexaschachte" target="_blank"><Facebook/></a>
                                    </div>
                                    <span>Stay In Touch</span>
                                </div>
                            </div>
                            <span className="Copyright">&copy; 2020</span>
                        </div>
                    </div>
                </Parallax>
            </div>
        );
    }
}

export default withController(Footer);