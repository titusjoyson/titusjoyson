import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HomeCardV2 from '../../components/card/homeCardV2';
import Moon from '../../components/card/moon';
import Particles from 'react-particles-js';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ReactGA from 'react-ga';


const useStyles = makeStyles({
    container: {
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        height: "inherit",
    },
    containerSpace:{
        justifyContent: "space-between",
    },
    containerEnd:{
        justifyContent: "flex-end",
    },
});

function Home() {
    const theme = useTheme();
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Container
            maxWidth={false}
            className={[classes.container, matches ? classes.containerSpace : classes.containerEnd]}
            style={{ padding: 0 }}
        >
            <HomeCardV2/>
        </Container>
    )
}

export default class HomeWraper extends React.Component {

    componentDidMount(){
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render(){
        return <Home/>
    }
}