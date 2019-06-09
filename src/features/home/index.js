import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HomeCard from '../../components/card/homeCard';



const useStyles = makeStyles({
    container: {
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        height: "inherit",
    }
});

export default function Home() {
    const classes = useStyles();
    return (
        <Container
            maxWidth="lg"
            className={classes.container}
            style={{ padding: 0 }}
        >
            <HomeCard />
        </Container>
    )
}