import React, { useState, useEffect } from 'react';
import Users from '../user/Users';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  userWrapper: {
    padding: '5rem',
    display: 'grid',
    justifyContent: 'center'

  },
  buttonWrapper: {
    margin: 'auto'
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  useEffect(() => {
    const onScroll = (e) => {
      e.preventDefault();
      console.log(window.innerHeight + window.scrollY, document.body.offsetHeight, window.innerHeight + window.scrollY >= document.body.offsetHeight)
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1) {
        console.log("you're at the bottom of the page")
        setLimit(limit + 5)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [limit])

  const logout = e => {
    e.preventDefault();
    sessionStorage.clear();
    navigate('/login');
  }

  return (
    <div className={classes.root}>
      <Container maxWidth='sm'>
        <Grid container>
          <Grid item xs={8}>
            <h1>LIST OF ALL THE USERS</h1>
          </Grid>
          <Grid item xs={4} className={classes.buttonWrapper}>
            <Button
              size="medium"
              color='secondary'
              variant='contained'
              type='submit'
              onClick={(e) => { logout(e) }}>Logout</Button>
          </Grid>
        </Grid>
        <div className={classes.userWrapper}>
          <Users
            page={page}
            limit={limit}
          />
        </div>
      </Container>
    </div>

  )
}

export default Dashboard;
