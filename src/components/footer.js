import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'


export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Grid>
            <Button target="_blank" href="https://github.com/LauraLively"rel="noreferrer noopener"><i class="fab fa-github fa-2x"></i></Button>
            <Button target="_blank" href="https://www.linkedin.com/in/laura-lively/"rel="noreferrer noopener"><i class="fab fa-linkedin fa-2x"></i></Button>
            <Button target="_blank" href="https://500px.com/lauralively"rel="noreferrer noopener"><i class="fab fa-500px fa-2x"></i></Button>
        </Grid>
        <Grid>
          <p>© 2019 Laura Lively</p>
        </Grid>
      </div>
    )
  }
}

export default Footer;
