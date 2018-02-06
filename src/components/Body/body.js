import React from 'react';
import FaChevronDown from 'react-icons/lib/fa/chevron-down';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Profile from '../../static/Seth-1.jpg'
import Experience from '../Experience/experience'
import About from '../About/about'
import Portfolio from '../Portfolio/portfolio'
const styles = {
    // root: {
    //     flexGrow: 1,
    //     marginTop: 30,
    //     width: '100%',
    //     'max-width': '1000px'
    // },
    aboutRoot: {
        flexGrow: 1,
        
        height: 'auto',
        //'padding': '50px',
        'padding-top': '20px',
        'padding-bottom': '20px',
        'background-color': 'rgb(15, 41, 61)',
        //'background': 'linear-gradient(to bottom 15, 41, 61)'
    },
    exRoot: {
        flexGrow: 1,

        height: 'auto',
        //'padding': '50px',
        marginTop: 30,
        'padding-top': '24px',
        'padding-bottom': '24px',
        //'background-color': 'rgb(15, 41, 61)',
        //'background': 'linear-gradient(to bottom 15, 41, 61)'
    },
    portRoot: {
        flexGrow: 1,

        height: 'auto',
        //'padding': '50px',
        'padding-top': '50px',
        'padding-bottom': '20px',
        'background-color': 'rgb(49, 90, 121)',
        //'background': 'linear-gradient(to bottom 15, 41, 61)'
    },
    

}


const Body = () => {
    return (
        <div >
            <div style={styles.aboutRoot} id="about">
                <About />
            </div>
            <div style={styles.exRoot}>
                <Experience />
            </div>
            <div style={styles.portRoot}>
                <Portfolio />
            </div>
        </div>
    )
}

export default Body;