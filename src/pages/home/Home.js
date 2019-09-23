import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './styles.scss';
import Logo from '../../components/logo/Logo';
import { Parallax } from 'react-scroll-parallax';

class Home extends Component {
    render() {
        return (
            <Route>
                <section className="AppHero">
                    <figure className="HomeHero"></figure>

                    <Parallax className="ParallaxWrapper" y={[-20, 20]} tagOuter="div">
                        <div className="HeroContent">
                            <Logo/>
                            <h1>Alexa Whitehurst</h1>
                            <div className="HeroContentSubtitle">
                                Fashion Designer
                            </div>
                        </div>
                    </Parallax>
                </section>

                <section className="Branding">
                    <figure></figure>

                    <div className="BrandingContent">
                        <Parallax className="ParallaxWrapper" y={[20, -20]} tagOuter="div">
                            <div className="BrandingContentContainer">
                                <h2>Behind<br/>the Brand</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                <Link to="/bio" className="Button">About Alexa</Link>
                            </div>
                        </Parallax>
                    </div>
                </section>
            </Route>
        );
    }
}

export default Home;