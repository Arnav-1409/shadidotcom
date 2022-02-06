import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardContent, CardActions, Button, CircularProgress } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formWrapper: {
    padding: '5rem'
  },
  fieldWrapper: {
    display: 'grid',
    padding: '1.5rem'
  },
  buttonWrapper: {
    padding: '2rem'
  },
  loaderWrapper: {
    padding: '5rem',
    display: 'grid',
    justifyContent: 'center'

  }
}));

const Login = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });
  const [loader, setLoader] = useState(false);

  const handleChange = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    })
  }

  const submitHandle = e => {
    e.preventDefault();
    console.log(inputs);
    if (inputs.username.toLowerCase().trim() === 'foo' && inputs.password.toLowerCase().trim() === 'bar') {
      let token = Math.floor(Math.random() * Date.now());
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('username', inputs.username);
      navigate('/home')
    }
  }

  return (
    <React.Fragment>
      <Container maxWidth='sm'>
        <form noValidate autoComplete="off" className={classes.formWrapper} onSubmit={submitHandle}>
          {loader ?
            <div className={classes.loaderWrapper}>
              <CircularProgress />
            </div>
            :
            <Card className={classes.root}>
              <CardContent>
                <div className={classes.fieldWrapper}>
                  <TextField id="standard-basic" label="Username" type='text' name='username' value={inputs.username} onChange={(e) => handleChange(e)} required />
                  <TextField id="standard-basic" label="Password" type='password' name='password' value={inputs.password} onChange={(e) => handleChange(e)} required />
                </div>
              </CardContent>
              <CardActions className={classes.buttonWrapper}>
                <Button size="medium" color='primary' variant='contained' type='submit' disabled={!(inputs.username && inputs.password)}>Login</Button>
              </CardActions>
            </Card>
          }
        </form>
      </Container>
    </React.Fragment>
  )
}

export default Login;
