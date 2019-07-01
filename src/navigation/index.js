import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router-dom";
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Home from '../features/home';
import About from '../features/about';
import { ParticleSkyView } from '../components/particle';


function AppRouter() {
    return (
        <Router>
            <div id="app">
                <NavBar />
                <div className="rout-container">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Redirect to="/" />
                    </Switch>
                </div>
                <Footer />
                <ParticleSkyView />
            </div>
        </Router>
    );
}

export default AppRouter;