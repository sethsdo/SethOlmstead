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
import {sendMessage} from './sendMessage'

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
        'float': 'left',
        'margin-top': '30px',
        'float': 'right',
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
    }
};


const Footer = () => {
    return (
        //<div style={containerStyles.container}>
            <div style={containerStyles.container}>
                {/* <h1>console.log( See ya around )</h1> */}
                <Grid container spacing={24} style={styles.container}>
                    <Grid item xs={12}>
                        <div style={containerStyles.paper}>
                            <h1>Contact Me</h1>
                            <Contact/>
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
                    <FaLinkedin />
                </Avatar>
                <Avatar style={styles.avatar}>
                    <FaGithub />
                </Avatar>
                <Avatar style={styles.avatar}>
                    <FaFacebook />
                </Avatar>
            </div>
        </div>
    )
}




class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            contact: '',
            message: '',
        };
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
        console.log(this.state)
    };
    onSubmit(e) {
        e.preventDefault();
        sendMessage(this.state)
        console.log(this.state)
    }
    render() {

        return (
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                    {/* <Paper className={containerStyles.paper}> */}
                        <FormControl fullWidth style={styles.formControl}>
                            <InputLabel>
                                Name
                            </InputLabel>
                            <Input
                                id="adornment-name"
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                            />
                        </FormControl>
                    {/* </Paper> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                    {/* <Paper className={containerStyles.paper}> */}
                        <FormControl fullWidth style={styles.formControl}>
                            <InputLabel>
                                Email
                            </InputLabel>
                            <Input
                                id="adornment-contact"
                                value={this.state.contact}
                                onChange={this.handleChange('contact')}
                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                            />
                        </FormControl>
                    {/* </Paper> */}
                </Grid>
                <Grid item xs={12}>
                    {/* <Paper className={containerStyles.paper}> */}
                        <FormControl fullWidth style={styles.formControl}>
                            <InputLabel>Message</InputLabel>
                            <Input
                                id="adornment-message"
                                value={this.state.message}
                                onChange={this.handleChange('message')}
                                endAdornment={<InputAdornment position="end"></InputAdornment>}
                            />
                        </FormControl>
                    {/* </Paper> */}
                </Grid>
                
                <Button raised style={containerStyles.submitButton} onClick={this.onSubmit.bind(this)}>
                    <i class="material-icons">&#xE163;</i>Send
                </Button>
            </Grid>
        );
    }
}


// const Footer = () => {
//     return (
//         <div style={styles.container}>
//             <p>Hello</p>
//         </div>
//     );
// }

export default Footer;