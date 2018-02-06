import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import MThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Root = () => {
    return (
        <MThemeProvider>
            <App />
        </MThemeProvider>
    )
}

ReactDOM.render(<Root />, document.querySelector('#root'));

