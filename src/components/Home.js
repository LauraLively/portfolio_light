import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Image from '../img/Avatar.png';
import Button from '@material-ui/core/Button';

export class Home extends Component {
  render() {
    return (
      <Grid id="home"className="root home">
      <Grid className="homeText">
         <h1>I'm Laura</h1>
        <img src={Image} alt="This is me!"/>
        <Grid className="smallText">
        <p>a Web Developer</p>
      </Grid>
      <Button variant="contained" size="large">
        <a href="/#contact">Need a Website > </a>
      </Button>
      <Button variant="contained" size="large" >
        <a href="/#contact">Looking to Hire ></a>
      </Button>      
      </Grid>
      </Grid>
    )
  }
}

export default Home
