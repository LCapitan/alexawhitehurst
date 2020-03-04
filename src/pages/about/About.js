import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './styles.scss'
import {Parallax} from "react-scroll-parallax";

class About extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <Route>
                <div className="Tier">
                    <section className="TierHero">
                        <Parallax className="ParallaxWrapper" x={[20, -20]} tagOuter="span">
                            <div className="AboutHero">
                                <figure></figure>
                            </div>
                        </Parallax>

                        <Parallax className="ParallaxWrapper" y={[-30, 50]} tagOuter="span">
                            <div className="TierHeroContent">
                                <h1>Biography</h1>
                                <p><em>"When you don't dress like everyone else, you don't have to think like everyone else."</em></p>
                                <p className="QuoteAuthor">- Iris Apfel</p>
                            </div>
                        </Parallax>
                    </section>

                    <div className="TierSections">
                        <section className="TierSectionTwoCol">
                            <div className="TierSectionTwoColImg">
                                <Parallax className="ParallaxWrapper" x={[-10, 10]} tagOuter="span">
                                    <figure className="EarlyLife"></figure>
                                </Parallax>
                            </div>

                            <Parallax className="ParallaxWrapper" y={[20, -20]} tagOuter="span">
                                <div>
                                    <div className="TierSectionsContent">
                                        <h2>Alexa Whitehurst</h2>
                                        <p>was born in Dover Delaware, where her interest in design was sparked as a young child while dressing her Barbie dolls. The wishes of being able to make Barbie;s clothes life-size was an idea she could not let go of until accomplished. She always love to sketch clothing growing up but didn't know how to sew yet. Alexa attended Drexel University where she graduated as a scholar and receiving her Bachelors Degree in Fashion Design. She has now worked as a Designer at Michael Kors, Coach, Madewell, and Saks Fifth Avenue in New York City. Alexa's focus is to bring ideas to life by creating and striking, high quality attire with a custom fit. Alexa currently resides in Delray Beach, Florida.</p>
                                    </div>
                                </div>
                            </Parallax>
                        </section>
                    </div>
                </div>
            </Route>
        );
    }
}

export default About;