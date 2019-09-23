import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Logo from '../../components/logo/Logo';
import AMLogo from '../../components/logo/AMLogo';

//components
import Header from '../header/Header';
import Menu from '../menu/Menu';
import Footer from '../footer/Footer';

//pages
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Collections from '../../pages/collections/Collections';
import Contact from '../../pages/contact/Contact';
import { Parallax } from "react-scroll-parallax";
import Techpacks from "../../pages/techpacks/Techpacks";
import BuckleUp from "../../pages/collections/BuckleUp";

class MainApp extends Component {

    render() {

        // console.log(this.props);

        const {
            menuIsOpen: isOpen
        } = this.props

        return (

            <BrowserRouter>
                <div className={isOpen ? 'App MenuIsOpen' : 'App'}>
                    <Menu/>
                    <div className="ContentWrapper">
                        <Header/>
                        <main>
                            <Switch>
                                <Route path="/bio" component={About}/>
                                <Route path="/collections" component={Collections}/>
                                <Route path="/collections/buckle-up" component={BuckleUp}/>
                                <Route path="/techpacks" component={Techpacks}/>
                                <Route path="/contact" component={Contact}/>
                                <Route exact path="/" component={Home}/>
                            </Switch>
                        </main>
                        <Footer/>
                        <div className="SuperGraphic">
                            <Parallax className="ParallaxWrapper" y={[-20, 20]} tagOuter="div">
                                <Logo/>
                            </Parallax>
                        </div>
                    </div>

                    <a href="https://amelen.dev" target="_blank" className="DevLogo"><AMLogo/><span className="sr-only">Designed and built by Austin Melendez</span></a>
                </div>
            </BrowserRouter>

        );
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(
    mapStateToProps
)(MainApp);



