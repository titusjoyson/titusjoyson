import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Home from '../features/home';
import About from '../features/about';
import Projects from '../features/projects';
import Hidden from '@material-ui/core/Hidden';
import SpeedDial from '../components/speeddialer';
import { ParticleSkyView } from '../components/particle';


function AppRouter() {
    return (
        <Router>
            <div id="app">
                <NavBar />
                <div className="rout-container">
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                </div>
                <Footer />
                <ParticleSkyView/>
            </div>
        </Router>
    );
}

export default AppRouter;