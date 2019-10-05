import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Parallax } from "react-scroll-parallax";

class BuckleUp extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return(
            <Route>
                <div className="Tier">
                    <section className="TierHero">
                        <Parallax className="ParallaxWrapper" x={[10, -10]} tagOuter="span">
                            <div className="BuckleUpHero">
                                <figure></figure>
                            </div>
                        </Parallax>

                        <Parallax className="ParallaxWrapper" y={[-10, 10]} tagOuter="span">
                            <div className="TierHeroContent">
                                <h1>Buckle Up</h1>
                                <p>Here's some info about this collection.</p>
                            </div>
                        </Parallax>
                    </section>
                </div>
            </Route>
        );
    }
}

export default BuckleUp;