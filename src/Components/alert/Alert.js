import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { error } = props;

  const handleClose = (event, reason) => {
    console.log(reason)
    if (reason === 'clickaway') {
      setOpen(false);
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={(e) => { handleClose(e, 'clickaway') }} severity='error'>
          {error.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
