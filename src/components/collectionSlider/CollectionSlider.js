import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { Parallax } from "react-scroll-parallax";
import { withController } from "react-scroll-parallax/cjs";

class CollectionSlider extends Component {

    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.props.parallaxController.update();
    };

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div className="SliderContainer">
                <div className="ContentSliderWrapper">
                    <div className="ContentSlider">
                        <Slider {...settings}
                                asNavFor={this.state.nav2}
                                ref={slider => (this.slider1 = slider)}
                                fade={true}>
                            <div>
                                <div className="">
                                    <div className="">
                                        <h2>#AEW-S16-001</h2>
                                        <div>
                                            This silk shantung fabric is woven vertically in navy fibers and cross woven horizontally with orange fibers creating an iridescent affect.
                                            <Link to="/buckle-up" className="Button">View Collection</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                    <div className="">
                                        <h2>#AEW-S16-002</h2>
                                        <div>
                                            This olive leather corset consist of 5 layers of fabric.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="">
                                    <div className="">
                                        <h2>#BUCKLEUP</h2>
                                        <div>
                                            "Buckle Up" was inspired my my stepfather Chuck, who passed away right before the process of my collection began. I nicknamed him Chuckles and called him Buckles. His bold authoritative charisma and soft hearted soul inspired me to build a collection that was a mix of sharp pointed studs, romantic embroideries of cobalt blue flowers.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>

                <Slider {...settings}
                        asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={1}
                        swipeToSlide={true}
                        focusOnSelect={true}>
                    <div>
                        <div className="SlideWrapper">
                            <Parallax className="ParallaxWrapper" y={[10, -10]} tagOuter="div" onLoad={this.handleLoad}>
                                <figure className="SlideImg SlideImgA1"></figure>
                            </Parallax>

                            <Parallax className="ParallaxWrapper" y={[-20, 20]} tagOuter="div" onLoad={this.handleLoad}>
                                <figure className="SlideImg2 SlideImgA2"></figure>
                            </Parallax>
                        </div>
                    </div>
                    <div>
                        <div className="SlideWrapper">
                            <Parallax className="ParallaxWrapper" y={[10, -10]} tagOuter="div" onLoad={this.handleLoad}>
                                <figure className="SlideImg SlideImgB1"></figure>
                            </Parallax>

                            <Parallax className="ParallaxWrapper" y={[-20, 20]} tagOuter="div" onLoad={this.handleLoad}>
                                <figure className="SlideImg2 SlideImgB2"></figure>
                            </Parallax>
                        </div>
                    </div>
                    <div>
                        <div className="SlideWrapper">
                            <Parallax className="ParallaxWrapper" y={[10, -10]} tagOuter="div" onLoad={this.handleLoad}>
                                <figure className="SlideImg SlideImgC1"></figure>
                            </Parallax>

                            <Parallax className="ParallaxWrapper" y={[-20, 20]} tagOuter="div" onLoad={this.handleLoad}>
                                <figure className="SlideImg2 SlideImgC2"></figure>
                            </Parallax>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

export default withController(CollectionSlider);