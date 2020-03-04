import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { Parallax } from "react-scroll-parallax";
import { withController } from "react-scroll-parallax/cjs";

class CollectionDetailSlider extends Component {

    handleLoad = () => {
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
            <div className="DetailSliderContainer">
                <div className="LeftSlider">
                    <Slider {...settings}
                            asNavFor={this.state.nav2}
                            ref={slider => (this.slider1 = slider)}
                            fade={false}
                            slidesToScroll={1}
                            vertical={true}
                    >
                        <div className="">
                            Slide 1
                        </div>
                        <div className="">
                            Slide 2
                        </div>
                        <div className="">
                            Slide 3
                        </div>
                    </Slider>
                </div>

                <div className="RightSlider">
                    <Slider {...settings}
                            asNavFor={this.state.nav1}
                            ref={slider => (this.slider2 = slider)}
                            slidesToShow={1}
                            slidesToScroll={1}
                            swipeToSlide={false}
                            focusOnSelect={true}
                            vertical={true}
                    >
                        <div className="">
                            Slide 1
                        </div>
                        <div className="">
                            Slide 2
                        </div>
                        <div className="">
                            Slide 3
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default withController(CollectionDetailSlider);