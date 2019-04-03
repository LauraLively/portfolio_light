import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export class Thanks extends Component {
  render() {
    return (
        <form container noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Name"
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
        />
        </form>
    );
  }
};

export default Thanks;
