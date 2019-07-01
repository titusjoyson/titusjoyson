import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Slider from "react-slick";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ProjectCard from '../card/projectCard';


export default function HomeCardV2() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Grid container spacing={0} direction={matches ? "column" : "row"} className="home-card-container-grid">
            <Grid item xs={12} sm={12} md={12} lg={8} className="home-card-left-item">
                <div className="home-intro-container">
                    <h1 className="home-intro-text">
                        <span>Hi! I'm Titus Joyson, </span>
                        <span>an Software Developer based in Chennai.</span>
                    </h1>
                    <div>
                        <SubTitleSlide />
                    </div>
                    <ProjectCard />
                </div>
            </Grid>
            <Hidden mdDown>
                <Grid item xs={12} sm={4} md={4} className="home-card-right-item">

                </Grid>
            </Hidden>
        </Grid>
    )
}


class SubTitleSlide extends React.Component {
    state = {
        data: [
            "Welcome to my new webiste!",
            "I code backend, frontend and mobile app's",
            "I like to travel",
            ""
        ]
    }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            arrows: false,
            autoplay: true
        };
        return (
            <Slider {...settings} className="home-intro-text-sli-wrap">
                {this.state.data.map(subtitle => {
                    return (
                        <div className="home-intro-text-sli-container">
                            <h2 className="home-intro-text-sli-text">{subtitle}</h2>
                        </div>
                    )
                })}
            </Slider>
        );
    }
}