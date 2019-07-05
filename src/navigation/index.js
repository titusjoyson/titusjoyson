import React from "react";
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Home from '../features/home';
import About from '../features/about';
import { ParticleSkyView } from '../components/particle';


class AppRouter extends React.Component {
    state = {
        rout: "home"
    }

    _switchRout = () => {
        this.setState((state)=>({
            rout: state.rout === "home" ? "about" : "home"
        }))
    }

    render(){
        const { rout } = this.state;
        let MainComp = null;
        if (rout === "home"){
            MainComp = Home
        }else if(rout === "about"){
            MainComp = About
        }
        return (
            <div id="app">
                <NavBar />
                <div className="rout-container">
                    <MainComp />
                </div>
                <Footer onPress={this._switchRout}/>
                <ParticleSkyView />
            </div>
        );
    }
}

export default AppRouter;