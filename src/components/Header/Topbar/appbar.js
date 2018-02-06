import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Drawer from 'material-ui/Drawer';

// let open = false;

// const handleToggle = (state) => {
//     return check
// }

// export const Appbar = () => {
//     let open = false
//     console.log("here")
//     return(
//         <div>
            
//             <AppBar
//                 title="Title"
//                 onClick={open = !open}
//                 iconElementRight={<IconButton></IconButton>}
//             />
//             <Drawer open={open}>
//                 <MenuItem>Menu Item</MenuItem>
//                 <MenuItem>Menu Item 2</MenuItem>
//             </Drawer>
//         </div>
//     );
// }

const styles = {
    root: {
        width: '100%',
        'position': 'fixed',
    },
    flex: {
        flex: 1,
    },
    color: {
        'background-color': 'rgba(93, 88, 88, 0.28)'
    },
    sideAppbar: {
        'background-color': 'rgb(33, 33, 33)'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    link: {
        'text-decoration': 'none',
        'color': '#0f293d',
    },
};

export class Appbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    render() {
        return (

            <div style={styles.root} >
                <AppBar position="static" style={styles.color}>
                    <Toolbar>
                        <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon 
                                onClick={this.handleToggle}
                            />
                        </IconButton>
                        {/* <Typography type="title" color="inherit" style={styles.flex}>
                            Title
                        </Typography> */}
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.open}>
                    <AppBar position="static" style={styles.sideAppbar}>
                        <Toolbar>
                            <IconButton style={styles.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon
                                    onClick={this.handleToggle}
                                />
                            </IconButton>
                            {/* <Typography type="title" color="inherit" style={styles.flex}>
                            Title
                        </Typography> */}
                        </Toolbar>
                    </AppBar>
                    <MenuList>
                        <MenuItem onClick={this.handleToggle}><a href="#home" style={styles.link}>Home</a></MenuItem>
                        <MenuItem onClick={this.handleToggle}><a href="#about" style={styles.link}>About</a></MenuItem>
                        <MenuItem onClick={this.handleToggle}><a href="#experience" style={styles.link}>Experience</a></MenuItem>
                        <MenuItem onClick={this.handleToggle}><a href="#portfolio" style={styles.link}>Portfolio</a></MenuItem>
                        <MenuItem onClick={this.handleToggle}><a href="#contact" style={styles.link}>Contact</a></MenuItem>
                    </MenuList>
                </Drawer>
            </div>
        );
    }
}