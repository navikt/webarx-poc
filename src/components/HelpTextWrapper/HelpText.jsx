import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import IconButton from '@material-ui/core/IconButton';
import { HelpOutline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const PaperComponent = props => (
  <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
    <Paper {...props} />
  </Draggable>
);

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const HelpText = (props) => {
  const { dialogTitle, dialogContent } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <IconButton className={classes.button} variant="outlined" color="primary" onClick={handleClickOpen}>
        <HelpOutline />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {dialogTitle}
        </DialogTitle>
        <DialogContent>
          {dialogContent}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

HelpText.propTypes = {
  dialogTitle: PropTypes.string.isRequired,
  dialogContent: PropTypes.objectOf(String).isRequired,
};

export default HelpText;