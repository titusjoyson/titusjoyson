import React from 'react';
import Grid from '@material-ui/core/Grid';
// import { useTheme } from '@material-ui/core/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import config from '../../config';


const useStyles = makeStyles({
  card: {
    maxHeight: "100%",
    backgroundColor: "rgba(0, 0, 0, 1)",
    boxShadow: 'none',
    padding: 5
  },
  cardActionArea: {
    backgroundColor: "transparent",
  },
  white:{
      color: "#FFF"
  },
  content:{
    marginTop: 20
  },
  actionSection:{
      marginTop: 5
  }
});



export default function ProjectCard() {
    const classes = useStyles();
    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.up('xm'));
    const handleAcClick = (link = null) => {
        if (link != null) {
            let win = window.open(link, '_blank');
            win.focus();
        }
    };

    return (
        <Grid container spacing={0} className="project-card-container-grid">
            <Grid item xs={12} className="project-card-item">
                <Card className={classes.card}>
                    <CardActionArea className={classes.cardActionArea} >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" className={classes.white}>
                                More Things Comming UP!!!
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" className={[classes.white, classes.content]}>
                            I Have planned to do some cool project, and start some cool initiatives.
                            Visit back soon or you may miss it.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={"project-card-item-action"}>
                        <Button 
                            size="small" 
                            color="primary" 
                            className={classes.white} 
                            onClick={()=>handleAcClick(config.GITHUB_PROFILE)}
                        >
                            GitHub
                        </Button>
                        <Button 
                            size="small" 
                            color="primary" 
                            className={classes.white} 
                            onClick={()=>handleAcClick(config.LINKIDIN_PROFILE)}
                        >
                            LinkidIn
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}