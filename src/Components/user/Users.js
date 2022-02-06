import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersAction } from '../../actions';
import Alert from '../alert/Alert';
import UserList from './UserList';
import CircularProgress from '@material-ui/core/CircularProgress';

const Users = ({ page, limit }) => {
  const dispatch = useDispatch();
  const usersData = useSelector(state => state.users.usersData);
  const usersErrMsg = useSelector(state => state.users.usersErrMsg);
  const isUsersFetching = useSelector(state => state.users.isUsersFetching);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    let data = {
      page, limit
    }
    dispatch(usersAction.sendUsersRequest(data));
  }, [limit])

  useEffect(() => {
    if (usersData && usersData?.length > 0) {
      setAllUsers([...usersData])
    }
  }, [usersData])

  if (usersErrMsg) {
    setTimeout(() => {
      dispatch(usersAction.clearAllNotifications());
    }, 3000)
  }
  return (
    <div>
      {isUsersFetching ?
        <CircularProgress />
        :
        (usersErrMsg ?
          <Alert error={usersErrMsg} />
          :
          (allUsers ?
            <div>
              {allUsers.map(userList => (
                <UserList
                  key={userList.id}
                  userList={userList}
                />
              ))}
            </div>
            :
            'NO DATA FOUND'
          )
        )
      }
    </div>
  )
};

export default Users;
