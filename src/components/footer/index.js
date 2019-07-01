import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import SpeedDial from '../speeddialer';
import config from '../../config';
import MotionButton from '../motion';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Fade from 'react-reveal/Fade';


export default function Footer() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [hideMotionButton, setHideMotionButton] = useState(false);

    return (
        <Container maxWidth={false} className="footer-transparent">
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
                <div className="footer-right-item">
                    <Fade when={!hideMotionButton} timeout={0}>
                        <MotionButton
                            motonButtonClass={matches === true ? "motion-button-small" : "motion-button-large"}
                            hidden={hideMotionButton}
                        />
                    </Fade>
                    <Hidden smDown>
                        <div className="eight columns tRight">
                            <ul className="socials-footer socials">
                                <li><a href={config.GITHUB_PROFILE} target="_blank">GitHub</a></li>
                                <li><a href={config.LINKIDIN_PROFILE} target="_blank">LinkedIn</a></li>
                                <li><a href={config.TWITTER_PROFILE} target="_blank">Twitter</a></li>
                            </ul>
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <SpeedDial onStateChange={(state) => setHideMotionButton(state)} />
                    </Hidden>
                </div>
            </Grid>
        </Container>
    )
}