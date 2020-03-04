import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Parallax } from "react-scroll-parallax";
import CollectionDetailSlider from "../../components/collectionDetailSlider/CollectionDetailSlider";

class BuckleUp extends Component {

    componentDidMount() {
        window.scrollTo(0,-10);
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

                    <section>
                        <div className="SliderFrame">
                            <CollectionDetailSlider/>
                        </div>
                    </section>

                    <div className="TierSections">
                        <section className="TierSectionTwoCol">
                            <div className="TierSectionTwoColImg">
                                <Parallax className="ParallaxWrapper" x={[-10, 10]} tagOuter="span">
                                    <figure className="BuckleUpMain"></figure>
                                </Parallax>
                            </div>

                            <Parallax className="ParallaxWrapper" y={[20, -20]} tagOuter="span">
                                <div>
                                    <div className="TierSectionsContent">
                                        <h2>Title goes here</h2>
                                        <p>This area is for a more detailed description of the collection than the one you have on the collections page slider. Write whatever you want, whatever makes sense. Just to give people a strong understanding of the collection.</p>
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

export default BuckleUp;