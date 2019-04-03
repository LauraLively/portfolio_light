import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../components/Home';
// import Lively from '../img/Logo.png'
import Lively2 from '../img/Logo2.png'

export class Navigation extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <AppBar className="appbarPaper" color="default" sticky="top">
                        <Toolbar className="appbar">
                            <img src={Lively2} alt="Laura Lively"/>
                            <div>
                            <a href="/#home"><Button size="large">Home</Button></a>
                            <a href="/#portfolio"><Button size="large">Portfolio</Button></a>
                            <a href="/#about"><Button size="large">About</Button></a>
                            <a href="/#contact"><Button size="large">Contact</Button></a>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <div>
                        <Route path="/" exact component={Home} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default Navigation;
