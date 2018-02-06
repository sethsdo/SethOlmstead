import React from 'react';
import {Appbar} from './Topbar/appbar';
import Grid from 'material-ui/Grid';
import background from '../../static/clouds.jpeg';
import FaChevronDown from 'react-icons/lib/fa/angle-double-down';
import Avatar from 'material-ui/Avatar';

const styles = {
    root: {
        flexGrow: 1,
        marginTop: 30,
        width: '100%',
        'max-width': '1000px'
    },
    paper: {
        padding: 16,
        textAlign: 'center',
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
    textBox: {
        'padding': '0',
        'margin': '0',
        'list-style': 'none',
        'display': 'flex',
    },
    headerText: {
        'position': 'absolute',
        'font-size': '2.0vw',
        'justify-content': 'center',
        'margin-top': '-35%',
        'margin-left': '24%',
    },
    innerBox: {
        'background-color': 'rgba(210, 219, 228, 0.33)',
        'border': '1px solid black',
        'padding': '10px'
    },
    triangleDown: {
        'width': '0',
        'height': '0',
        'margin-top': '-35%',
        'margin-left': '24%',
        'border-left': '50px solid transparent',
        'border-right': '50px solid transparent',
        'border-top': '100px solid red'
    },
    arrow: {
        width: 60,
        height: 60,
        'margin-left': 'auto',
        'margin-right': 'auto',
    },
    h1Text: {
        'text-align': 'center',
        'font-weight': 'lighter'
    },
    h2Text: {
        'font-weight': 'lighter'
    }
};

const Header = () => {
        return (
            <div className="App">
                <Appbar/>
                <Content/>
            </div>
        );
}

const Content = () => {
    return (
        <div className={styles.root}>
            <Grid container spacing={1}>
                <Grid item xs={12} style={styles.ig}>  
                    <img src={background} style={styles.img}/>
                    <div style={styles.textBox} >
                        <HeaderText />
                        {/* <div style={styles.triangleDown}></div> */}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

const HeaderText = () => {
    return (
        <div style={styles.headerText}>
            <div style={styles.innerBox}>
                <h1 style={styles.h1Text}>Full Stack Developer</h1>
                <h2 style={styles.h2Text}>Design | Architecture | Performance</h2>
            </div>
            <div style={styles.arrow}>
                <FaChevronDown style={styles.arrow} />
            </div>
        </div>
    )
}

export default Header;