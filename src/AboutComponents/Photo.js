import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const Icons = styled.p`
  color: teal;
  display: flex;
  justify-content: space-evenly;
`;


const DialogTitle = withStyles(theme => ({
    root: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      margin: 0,
      padding: theme.spacing.unit * 2,
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing.unit,
      top: theme.spacing.unit,
      color: theme.palette.grey[500],
    },
  }))(props => {
    const { children, classes, onClose } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing.unit * 2,
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles(theme => ({
    root: {
      borderTop: `1px solid ${theme.palette.divider}`,
      margin: 0,
      padding: theme.spacing.unit,
    },
  }))(MuiDialogActions);
  
  class Photo extends Component {
    state = {
      open: false,
    };
  
    handleClickOpen = () => {
      this.setState({
        open: true,
      });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    render() {
      return (
        <div className="photo">
          <Button fullWidth onClick={this.handleClickOpen}>
            <h1>Photo<br/>graphy</h1>
          </Button>
          <Dialog
            onClose={this.handleClose}
            aria-labelledby="customized-dialog-title"
            open={this.state.open}
          >
            <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
              Laura Lively Photography
            </DialogTitle>
            <DialogContent>
              <Typography gutterBottom>
                Photography is a passion of mine. And I love to work with companies to 
                show their products in the best light. Check out my portfolio and get in touch with me 
                and lets make something beautiful.
              </Typography>
              <Icons>
              <i class="fab fa-500px fa-4x"></i>
              <i class="fas fa-camera-retro fa-4x"></i>
              <i class="fab fa-adobe fa-4x"></i>
              </Icons>
            </DialogContent>
            <DialogActions>
            <a href="https://500px.com/lauralively" target="_blank" rel="noopener noreferrer"><Button onClick={this.handleClose} color="primary">
                Check out my Photography portfolio!
              </Button></a>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }
  
  export default Photo;