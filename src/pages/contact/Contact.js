import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './styles.scss';
import Form from './Form';
import { Parallax } from "react-scroll-parallax";

import VideoMP4 from '../../ui/vid/IMG_3012.mp4';
import VideoWebM from '../../ui/vid/IMG_3012.webm';
import VideoOgv from '../../ui/vid/IMG_3012.ogv';

class Contact extends Component {
    render() {
        return (
            <Route>
                <div className="Tier">
                    <section className="TierHero">
                        <Parallax className="ParallaxWrapper" x={[10, -10]} tagOuter="span">
                            <div className="ContactHero">
                                <figure></figure>
                            </div>
                        </Parallax>

                        <Parallax className="ParallaxWrapper" y={[-10, 10]} tagOuter="span">
                            <div className="TierHeroContent">
                                <h1>Contact</h1>
                                <p>Please fill out the form below and I will respond as soon as possible.</p>
                            </div>
                        </Parallax>
                    </section>

                    <div className="TierSections Raised">
                        <section className="TierSectionTwoCol Flip">
                            <div className="TierSectionTwoColImg">
                                <Parallax className="ParallaxWrapper" x={[5, -5]} tagOuter="span">
                                    <figure className="ContactImg">
                                        <video autoPlay muted loop role="img" id="myVideo">
                                            <source src={ VideoMP4 } type="video/mp4"/>
                                            <source src={ VideoWebM } type="video/ogv"/>
                                            <source src={ VideoOgv } type="video/webm"/>
                                        </video>
                                    </figure>
                                </Parallax>
                            </div>

                            <Parallax className="ParallaxWrapper" y={[20, -20]} tagOuter="span">
                                <div className="TierSectionsContent">
                                    <h2>Talk to Alexa</h2>
                                    <Form/>
                                </div>
                            </Parallax>
                        </section>
                    </div>
                </div>
            </Route>
        );
    }
}

export default Contact;