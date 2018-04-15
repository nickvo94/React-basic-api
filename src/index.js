import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloComponent from './HelloComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const MyApp = () => (
    <MuiThemeProvider>
    <HelloComponent firstname="John" />
    </MuiThemeProvider>
);

ReactDOM.render(<MyApp/>,
document.getElementById('root'));