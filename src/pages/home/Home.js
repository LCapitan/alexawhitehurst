import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './styles.scss';
import Logo from '../../components/logo/Logo';
import { Parallax } from 'react-scroll-parallax';

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

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

                <section className="Branding CenterContent">
                    <div className="ImgBg">
                        <figure></figure>
                    </div>

                    <Parallax className="ParallaxWrapper" y={[30, -20]} tagOuter="span">
                        <div className="CenterContentWrapper">
                            <h2>Behind the Brand</h2>
                            <p>Walking in Whitehurst provides a couture atelier experience with captivating designs inspired to empower women. With the use of fine fabrics, sophisticated silhouettes, and a figure-friendly fit, each garment is produced from start to finish by Alexa Whitehurst.</p>

                            <Link to="/bio" className="Button">About Alexa</Link>
                        </div>
                    </Parallax>
                </section>
            </Route>
        );
    }
}

export default Home;