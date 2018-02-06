import React from 'react';
import FaChevronDown from 'react-icons/lib/fa/chevron-down';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Profile from '../../static/Seth-1.jpg'
import Grid from 'material-ui/Grid';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';
import {tileData} from './data';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Icon from 'material-ui/Icon';
import Save from 'material-ui-icons/Save';
import FaGithub from 'react-icons/lib/fa/github';

const styles = {
    root: {
        display: 'flex',
        marginTop: 50,
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    paper: {
        padding: 16,
        textAlign: 'center',
    },
    paper1: {
        'background-color': '#ffffff0a',
        'color': 'white',
        //padding: 16,
        textAlign: 'center',
        border: 0,
        'margin-left': 'auto',
        'margin-right': 'auto',
    },
    h1: {
        'font-weight': 'lighter',
        'margin': '15px',
        // 'margin-left': '30px',
        // 'margin-right': '30px',
    },
    gridList: {
        'max-width': 950,
        'max-height': 650,
        'margin': '20px'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    iconSize: {
        width: 50,
        height: 50
    },
    card: {
        //maxHeight: 400,
    },
    media: {
        height: 200,
    },
    container: {
        'margin-top': '40px',
        'margin-bottom': '40px',
        'marign-right': 'auto',
        'marign-left': 'auto',
        'padding': '20px',
        'max-height': '700px',
        overflow: 'auto'
    },
    button: {
        margin: 'auto',
    },
    gitButton: {
        
    },
    rightIcon: {
        
    }

}


const Portfolio = () => {
    return (
        <div style={styles.root}>
            <Grid container spacing={24}>

                <Paper style={styles.paper1}>
                    <h1 style={styles.h1}>Some of my work</h1>
                </Paper>
           
            </Grid>

            <Grid container spacing={24} style={styles.container}>
                {tileData.map(tile => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Card style={styles.card}>
                            <CardMedia
                                style={styles.media}
                                image={tile.img}
                                title={tile.title}
                            />
                            <CardContent>
                                <Typography variant="headline" component="h2">
                                    <h2>{tile.title}</h2>
                                </Typography>
                                <Typography component="p">
                                    <p>{tile.about}</p>
                                    {tile.png.map(icon => (
                                        <img style={styles.iconSize} src={icon}/>
                                    ))}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Learn More<a href={tile.link}></a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button style={styles.button} onClick={redirectToGit} variant="raised" color="default">
                <a target="_blank" href="https://github.com/sethsdo/">More <FaGithub style={styles.gitButton} /></a>
            </Button>
        </div>
    )
}
const redirectToGit = () => {
    return 
}

export default Portfolio;