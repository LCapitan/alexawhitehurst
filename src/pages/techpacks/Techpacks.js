import React, { Component } from 'react';
import './styles.scss';
import {Parallax} from "react-scroll-parallax";

class Techpacks extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="Tier">
                <section className="TierHero">
                    <Parallax className="ParallaxWrapper" y={[-30, 30]} tagOuter="span">
                        <div className="TierHeroContent">
                            <h1>Techpacks</h1>
                        </div>
                    </Parallax>

                    <div className="TechpacksHero">
                        <figure></figure>
                    </div>
                </section>
            </div>
        );
    }
}

export default Techpacks;