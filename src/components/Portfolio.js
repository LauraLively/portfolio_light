import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Turq from '../img/Desktop_Turquois_1280.png';
import Fall from '../img/Fall_Bouquet_trello.png';
import Stars from '../img/iphone_stars.png'

class Portfolio extends Component {

    render() {
        return (
            <div id="portfolio" className="root portfolio">
            <Grid className="alignItems" container spacing={16}>
              <Grid item xs>
                <Paper className="paper" ><a href="http://www.1280thezone.com/"target="_blank" rel="noreferrer noopener"> <img src={Turq} alt="1280 the Zone"/></a></Paper>
              </Grid>
              <Grid item xs>
                <h1>Helio Training Collaborative Project</h1>
                <h3>Larry H Miller Sports Entertainment Group | 1280 The Zone</h3> 
                <h4>Implemented plugins and widgets on the website. Accomplished 
                  the goals set down by the LHM Group to produce a responsive 
                  and user-friendly website. </h4>
              </Grid>
            </Grid>
            <Grid className="alignItems" container spacing={16}>
              <Grid item xs>
                <h1>Trello Clone</h1>
                <h3>Full MERN Stack capstone project for Helio Bootcamp January 2019 to May 2019 </h3>
                <h4>Used ReactJS to build a Trello Clone.
                Created a backend using MongoDB and Express API. 
                Implemented Material UI as the CSS framework for this a web app.
                Accomplished Drag and Drop capabilities using React-Beautiful-dnd
                </h4>
              </Grid>
              <Grid item xs>
                <Paper className="paper"><img src={Fall} alt="Lively Trello Clone"/> </Paper>
              </Grid>
            </Grid>
            <Grid className="alignItems" container spacing={16}>
              <Grid item xs>
                <Paper className="paper"><img src={Stars} alt="SLC Stars"/></Paper>
              </Grid>
              <Grid item xs>
              <h1>Helio Training Collaborative Project</h1>
                <h3>Larry H Miller Sports Entertainment Group | Salt Lake City Stars App</h3> 
              </Grid>
            </Grid>
          </div>
        );
    }
};

export default Portfolio;
