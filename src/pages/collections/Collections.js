import React, { Component } from 'react';
import './styles.scss';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import CollectionSlider from '../../components/collectionSlider/CollectionSlider';
import { Parallax } from "react-scroll-parallax";
import { withController } from 'react-scroll-parallax';

class Collections extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();
    };

    render() {

        return (
            <Route>
                <div className="Tier Collections">
                    <section className="TierHero">
                        <Parallax className="ParallaxWrapper" x={[20, -20]} tagOuter="span"onLoad={this.handleLoad}>
                            <div className="CollectionsHero">
                                <figure></figure>
                            </div>
                        </Parallax>

                        <Parallax className="ParallaxWrapper" y={[-30, 50]} tagOuter="div" onLoad={this.handleLoad}>
                            <div className="TierHeroContent">
                                <h1>Collections</h1>
                                <p>View collections below</p>
                            </div>
                        </Parallax>
                    </section>

                    <section>
                        <div className="SliderFrame">
                            <CollectionSlider/>
                        </div>
                    </section>
                </div>
            </Route>
        );
    }
}

export default withController(Collections);