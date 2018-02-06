import React from 'react';
import FaChevronDown from 'react-icons/lib/fa/chevron-down';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Profile from '../../static/Seth-1.jpg'

const styles = {
    root: {
        flexGrow: 1,
        marginTop: 50,
        'max-width': 970,
        'padding': '55px',
        'margin-right': 'auto',
        'margin-left': 'auto'
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
        'margin-left': '30px',
        'margin-right': '30px',
    },
    h2: {
        'font-weight': 'lighter',
    },
    p: {
        'font-weight': 'lighter',
        'font-family': 'fantasy',
    },
    paper: {
        //padding: 16,
        textAlign: 'center',
        border: 0
    },
    avatarPaper: {
        height: 100,
        width: 100,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block',
    },
    img: {
        width: '100%'
    },
    avatar: {
        'position': 'initial',
        'justify-content': "center",
        // margin: 'auto',
        // 'margin-left': 'auto',
        // 'margin-right': 'auto',
        width: 375,
        height: 375,
        margin: 'auto',
    },
    contentBox: {
        'margin-top': '40px',
        'margin-bottom': '40px'
    },
    aboutText: {
        'width': '-webkit-fill-available',
        padding: 50
    },
    content: {
        'display': 'flex',
        // 'padding-left': 'auto',
        // 'padding-right': 'auto'
    }

}
   

const About = () => {
    return (
        <div style={styles.root}>
            <Grid container spacing={24}>

                <Paper style={styles.paper1}>
                    <h1 style={styles.h1}>About</h1>
                </Paper>
                <Grid container spacing={24} style={styles.contentBox}>
                    <Grid item xs={12} lg={5} style={styles.content}>
                        {/* <Paper style={styles.paper}> */}

                            <Avatar
                                alt="Seth OLmstead"
                                src={Profile}
                                style={styles.avatar}
                            />
                            {/* <img src={Profile} style={styles.img}/> */}
                        {/* </Paper> */}
                    </Grid>
                    <Grid item xs={12} lg={7}>
                        <div style={styles.aboutText}>
                            <h2 style={styles.h2}>SETH OLMSTEAD</h2>
                            <p style={styles.p}>To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life <br/> 
                            <br/>
                            Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover. <br/>
                            —Mark Twain</p>
                        </div>
                        {/* <Paper style={styles.paper}>xs=12 sm=6</Paper> */}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;