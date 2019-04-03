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
  
  class UIUX extends Component {
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
        <div className="uiux">
          <Button fullWidth  onClick={this.handleClickOpen}>
            <h1>UI/UX</h1>
          </Button>
          <Dialog
            onClose={this.handleClose}
            aria-labelledby="customized-dialog-title"
            open={this.state.open}
          >
            <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
              UX/UI
            </DialogTitle>
            <DialogContent>
              <p gutterBottom>
              User Experience (UX) and User Interface (UI) are some of the most confused 
              and misused terms in our field. A UI without UX is like a painter slapping 
              paint onto canvas without thought; while UX without UI is like the frame of a 
              sculpture with no paper mache on it. A great product experience starts with UX 
              followed by UI. Both are essential for the product’s success.
              </p>
              <p gutterBottom>
              -Rahul Varshney, co-creator of Foster.fm
              </p>
              <p gutterBottom>
              My Favorite part of web design is making things pretty! But without the 
              structure and funtionality of a website, you might as well make it page 
              with 1's 0's and nothing else.
              </p>  
            </DialogContent>
            <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              <a href="#contact">Help me with my UI/UX!</a>
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }
  
  export default UIUX;