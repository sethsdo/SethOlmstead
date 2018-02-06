import React from 'react';
import FaChevronDown from 'react-icons/lib/fa/chevron-down';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Profile from '../../static/Seth-1.jpg'
import Stepper, { Step, StepLabel, StepContent, StepIcon } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
//import {icon, node} from './icon'
import mean from '../../static/Mean.jpg';
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o';
import GoPencil from 'react-icons/lib/go/pencil';
import FaGlobe from 'react-icons/lib/fa/globe';


const styles = {
    // root: {
    //     flexGrow: 1,
    //     marginTop: 30,
    //     width: '100%',
    //     'max-width': '1000px'
    // },
    root: {
        flexGrow: 1,
        marginTop: 50,
        marginBottom: 60,
        'max-width': 1000,
        //'padding': '50px',
        'margin-right': 'auto',
        'margin-left': 'auto'
    },
    paper1: {
        'background-color': '#ffffff0a',
        'color': '',
        //padding: 16,
        textAlign: 'center',
        border: 0,
        'margin-left': 'auto',
        'margin-right': 'auto',
    },
    h1: {
        'font-weight': 'lighter',
        'margin': '20px',
    },
    paper: {
        marginTop: 30,
        marginBottom: 30,
        padding: 16,
        textAlign: 'center',
    },
    paperSalution: {
        marginTop: 30,
        padding: 10,
        textAlign: 'center',
        background: '#dce3eb'
    },
    header: {
        'background-color': '#ffffff0a',
        'border': '1px solid rgb(49, 90, 121)',
        'padding': '10px'
    },
    salutionHeader: {
        'background-color': '#ffffff0a',
        'font-weight': 'lighter',
        'padding': '10px'
    },
    icon: {
        "width": 50,
        "height": 50,
    },
    img: {
        'width': '100%',
        'height': '100%',
        'max-height': '100%',
        'margin': 0,
        'padding': 0,
        'background-size': '100% 100%',
        'background-repeat': 'no-repeat',
    },
    outerAvatar: {
        width: 70,
        height: 70,
        'margin-right': 'auto',
        'margin-left': 'auto',
        'background-color': 'white',
        'border': '.5px solid black',
        'margin-top': '-50px',
        'position': 'inherit',
    },
    innerAvatar: {
        width: 60,
        height: 60,
        'background-color': 'rgb(49, 90, 121)',
    },
    salutionBox: {
        margin: '20px'
    },
    icon: {
        size: 10
    }

}


const Experience = () => {
    return (
        <div style={styles.root}>
            <Grid container spacing={24}>
                
                <Paper style={styles.paper1}>
                    <h1 style={styles.h1}>Stack Salutions</h1>
                </Paper>

                <Grid container spacing={24}>
                    
                    <Grid item xs={6} sm={3}>
                        <Paper style={styles.paper}>
                            <div style={styles.header}><h3>MEAN.io</h3></div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper style={styles.paper}>
                            <div style={styles.header}><h3>MEARN.io</h3></div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper style={styles.paper}>
                            <div style={styles.header}><h3>Java</h3></div>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Paper style={styles.paper}>
                            <div style={styles.header}><h3>Python</h3></div>
                        </Paper>
                    </Grid>
                   
                    <Grid item xs={12} sm={4}>
                        <div style={styles.paperSalution}>
                            <Avatar style={styles.outerAvatar}>
                                <Avatar style={styles.innerAvatar}>
                                    <FaLightbulbO style={styles.icon}/>
                                </Avatar>
                            </Avatar>
                            <div style={styles.salutionBox}>
                                <div style={styles.salutionHeader}><h3>Design</h3></div>
                                <br />
                                <div style={styles.salutionHeader}>
                                    <p>The life of a designer is a life of fight. Fight against the ugliness. Just like a doctor fights against disease. For us, the visual disease is what we have around, and what we try to do is cure it somehow with design.</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div style={styles.paperSalution}>
                            <Avatar style={styles.outerAvatar}>
                                <Avatar style={styles.innerAvatar}>
                                    <FaGlobe style={styles.icon}/>
                                </Avatar>
                            </Avatar>
                            <div style={styles.salutionBox}>
                                <div style={styles.salutionHeader}><h3>Performence</h3></div>
                                <br />
                                <div style={styles.salutionHeader}>
                                    <p>The greatest performance improvement of all is when a system goes from not-working to working.</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div style={styles.paperSalution}>
                            <Avatar style={styles.outerAvatar}>
                                <Avatar style={styles.innerAvatar}>
                                    <GoPencil style={styles.icon}/>
                                </Avatar>
                            </Avatar>
                            <div style={styles.salutionBox}>
                                <div style={styles.salutionHeader}><h3>Architecture</h3></div>
                                <br />
                                <div style={styles.salutionHeader}>
                                    <p>Programming languages should be designed not by piling feature on top of feature, but by removing the weaknesses and restrictions that make additional features appear necessary.</p>
                                </div> 
                            </div>
                        </div>
                    </Grid>
                </Grid>
                
            </Grid>
        </div>
    )
}

const ExperienceStepper = () => {
    return (
        <div >
            
        </div>
    )
}

export default Experience;