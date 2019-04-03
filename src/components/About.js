import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Photo from '../AboutComponents/Photo';
import UIUX from '../AboutComponents/UIUX';
import WebDev from '../AboutComponents/WebDev';

class About extends Component {
    render() {
        return (
            <div id="about" className="about" >
                <Grid container spacing={0}>
                    <Grid item xs>
                        <UIUX/>
                    </Grid>
                    <Grid item xs>
                        <WebDev/>
                    </Grid> 
                    <Grid item xs>
                        <Photo/>
                    </Grid>
                </Grid>
            </div>
        );
    }
};
export default About;
