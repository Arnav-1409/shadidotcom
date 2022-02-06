import ACTIONS from '../constants/actions';

export const sendUsersRequest = (data) => {
  return {
    type: ACTIONS.SEND_USERS_REQUEST,
    payload: data
  };
}

export const fetchUsersSuccess = (data) => {
  return {
    type: ACTIONS.FETCH_USERS_SUCCESS,
    payload: data
  }
}

export const fetchUsersError = (error) => {
  return {
    type: ACTIONS.FETCH_USERS_ERROR,
    payload: error
  }
}

export const clearAllNotifications = () => {
  return {
    type: ACTIONS.CLEAR_ALL_NOTIFICATIONS
  }
}