import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Home from '../features/home';
import Hidden from '@material-ui/core/Hidden';
import SpeedDial from '../components/speeddialer';


function AppRouter() {
    return (
        <Router>
            <div id="app">
                <NavBar />
                <div className="rout-container">
                    <Route path="/" exact component={Home} />
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default AppRouter;