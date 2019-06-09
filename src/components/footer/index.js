import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import SpeedDial from '../speeddialer';

export default class Footer extends React.Component {

    render() {
        return (
            <Container maxWidth="lg" className="footer-transparent">
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    className='footer'
                >
                    <div className="eight columns footer-left-item">
                        <p>Copyrights © 2019 - Titus Joyson<br />
                            <a href="mailto:tj.joyson@gmail.com">tj.joyson@gmail.com</a></p>
                    </div>
                    <Hidden smDown>
                        <div className="eight columns tRight">
                            <ul className="socials-footer socials">
                                <li><a href="#">GitHub</a></li>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Twitter</a></li>
                            </ul>
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                    <SpeedDial />
                </Hidden>
                </Grid>
            </Container>
        )
    }
}