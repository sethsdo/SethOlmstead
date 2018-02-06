import React, {Component} from 'react';
import {styles} from './styles'
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '../../static/linkedin.png';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import PageviewIcon from 'material-ui-icons/Pageview';
import AssignmentIcon from 'material-ui-icons/Assignment';
import Button from 'material-ui/Button';
import FaIconPack from 'react-icons/lib/fa';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import FaGithub from 'react-icons/lib/fa/github';
import FaFacebook from 'react-icons/lib/fa/facebook';
import MdDrafts from 'react-icons/lib/md/drafts'
//import {sendMessage} from './sendMessage'
import axios from 'axios';

const containerStyles = {
    container: {
        'padding-top': '20px',
        'padding-bottom': '20px',
        'width': '100%',
        'box-sizing': 'border-box',
        'background-color': 'rgb(33, 33, 33)',
        'text-align': 'center',
        'height': 'auto',
        //'position': 'fixed',
        'bottom': '0',

    },
    root: {
        flexGrow: 1,
        //marginTop: 30,
    },
    paper: {
        //padding: 70,
        //marginTop: 0,
        //margin: 50,
        'margin-top': '40px',
        'margin-bottom': '60px',
        'margin-right': 'auto',
        'margin-left': 'auto',
        'max-width': '700px',
        'padding-left': '70px',
        'padding-right': '70px',
        textAlign: 'center',
    },
    submitButton: {
        
        'margin-top': '30px',
        'margin-right': 'auto',
        'margin-left': 'auto',
    },
    avatar: {
        'margin': '10',
    },
    bigAvatar: {
        'width': '60',
        'height': '60',
    },
    formContainer: {
        // 'margin-right': 'auto',
        // 'margin-left': 'auto',
        // 'max-width': '500px'
        'background-color': 'white'
    },
    link: {
        'text-decoration':'none',
        'color': '#0f293d',
    },
    h1: {
        'color': 'whitesmoke',
        'font-weight': 'lighter'
    },
    formControl: {
        color: 'white'
    }

};

const Footer = () => {
    return (
        //<div style={containerStyles.container}>
            <div style={containerStyles.container} id="contact">
                {/* <h1>console.log( See ya around )</h1> */}
                <Grid container spacing={24} style={styles.container}>
                    <Grid item xs={12}>
                        <div style={containerStyles.paper}>
                            <h1 style={containerStyles.h1}>Contact Me</h1>
                            <hr />  
                            <Contact/>
                            <h2></h2>
                            <Form style={styles.formContainer}/>
                        </div>
                    </Grid>
                </Grid>
                <h5>&copy; Seth Olmstead Design & Co. Created with React.js and Material-Ui</h5>
            </div>
        //</div>
    );
}


const Contact = () => {
    return (
        <div>
            <div style={styles.row}>
                <Avatar style={styles.avatar}>
                    <a href="https://linkedin.com/in/seth-olmstead" style={containerStyles.link}><FaLinkedin /></a>
                </Avatar>
                <Avatar style={styles.avatar}>
                    <a href="https://github.com/sethsdo/" style={containerStyles.link}><FaGithub /></a>
                </Avatar>
                <Avatar style={styles.avatar}>
                    <a href="https://www.facebook.com/seth.olmstead.5" style={containerStyles.link}><FaFacebook /></a>
                </Avatar>
            </div>
        </div>
    )
}




const Form = () => {

        return (
            <Grid container spacing={24}>
                <Button raised style={containerStyles.submitButton} type="submit" id="submit" value="SUBMIT">
                    <a href="mailto:setholmstead@gmail.com" style={containerStyles.link}><MdDrafts/> Email Me</a>
                </Button>
            </Grid>
        );
}


export default Footer;