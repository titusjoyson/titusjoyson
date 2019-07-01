import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import config from '../../config';


const useStyles = makeStyles({
    container: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        height: "inherit",
    }
});

export default function AboutV2(props) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('xm'));
    console.log(props.location)
    return (
        <Grid container spacing={0} direction={matches ? "column" : "row"} className="home-card-container-grid">
            <Grid item xs={12} sm={12} md={12} lg={8} className="home-card-left-item fadein">
                <div className="home-intro-container about-intro-container">
                    <h1 className="home-intro-text about-intro-text">
                        <span>About Me!</span>
                    </h1>
                    <p>
                        I am Titus Joyson. Living in Chennai and I am a Software Developer.
                        I started with Python when I was doing my Bachelors Degree and also spend
                        some significant time with JavaScript. I have good experience in developing
                        Applications in Backend using Django, NodeJs and I have also developed
                        Web sites using ReactJs and Mobile Applications using React Native.
                        Nowadays I'm more into Machine Learning, Flutter and IOT. I also started learning Rust.
                    </p>
                    <h3>Get In Touch</h3>
                    <p>
                        Like to know more! Write a Mail to
                        <a href={"mailto:" + config.EMAIL_ADDRESS}> tj.joyson@gamil.com</a> or send a request in
                        <a href={config.LINKIDIN_PROFILE} target="_blank"> LinkedIn</a> and say hi.
                    </p>
                </div>
            </Grid>
            <Hidden mdDown>
                <Grid item xs={12} sm={4} md={4} className="home-card-right-item">

                </Grid>
            </Hidden>
        </Grid>
    )
}