import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, Typography, Container, CardContent, Avatar, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: '1rem'
  },
  media: {
    height: 140,
  },
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  allHeading: {
    fontWeight: 700
  }
}));

const UserList = ({ userList }) => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth='sm'>
        <Card className={classes.root}>
          <CardActionArea>
            <div className={classes.avatarWrapper}>
              <Avatar alt="Remy Sharp" src={userList.avatar} className={classes.large} />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {userList.username}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.allHeading}>Name:</span> {`${userList.firstName} ${userList.lastName}`}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.allHeading}>Gender:</span> {userList.gender === 'M' ? 'Male' : 'Female'}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.allHeading}>Age:</span> {userList.age}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.allHeading}>Martial Status:</span> {userList.maritalStatus}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.allHeading}>Phone Number:</span> {userList.phone}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.allHeading}>Email:</span> {userList.email}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span className={classes.allHeading}>Address:</span> {`${userList.address.house} ${userList.address.street} ${userList.address.city} ${userList.address.zipcode} ${userList.address.country}`}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  )
};

export default UserList;