import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//   },
//   dense: {
//     marginTop: 16,
//   },
//   menu: {
//     width: 200,
//   },

//   palette: {
//     primary: "#00695f",
//     secondary: "#14a37f",
//     width: "50vw",
//   },
// });

export class Contact extends Component {
  state={
    name:"",
    email:"",
    msg: ""
  }
  render() {
    return (
      <div id="contact" className="root contact">
        <h1>Let's Keep in Touch!</h1>
        <form container action="https://getsimpleform.com/messages?form_api_token=fa57dbf853c643cf76c4c5d3b657a294" method="POST"> 
          <div>
            <TextField
              type="text"
              className="contactText"
              label="Name"
              name="name"
              margin="normal"
              variant="outlined"
              color="default"
            /><br />
            <TextField
            type="email"
              className="contactText"
              label="email"
              name="email"
              // value={this.state.email}
              //   onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            /><br />
            <TextField
              type="text"
              name="message"
              className="contactText"
              multiline
              rows="4"
              label="Message"
              // value={this.state.msg}
              //   onChange={this.handleChange('name')}
              margin="normal"
              variant="outlined"
            />
          </div>
          <Button variant="outlined" type >
            Send
      </Button>
        </form>
      </div>
    );
  }
};

export default Contact;
