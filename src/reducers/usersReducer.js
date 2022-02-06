import ACTIONS from './../constants/actions';

export default (state, action) => {
  switch (action.type) {
    case ACTIONS.SEND_USERS_REQUEST:
      state = action.payload
      return { ...state, usersErrMsg: false, usersSuccessMsg: false, isUsersFetching: true }

    case ACTIONS.FETCH_USERS_ERROR:
      return { ...state, usersErrMsg: action.payload, isUsersFetching: false, usersSuccessMsg: false };

    case ACTIONS.FETCH_USERS_SUCCESS:
      return { ...state, usersData: action.payload, usersSuccessMsg: true, usersErrMsg: undefined, isUsersFetching: false };

    case ACTIONS.CLEAR_ALL_NOTIFICATIONS:
      return { ...state, usersData: action.payload, usersSuccessMsg: undefined, usersErrMsg: undefined, isUsersFetching: false };

    default:
      return { ...state };

  }

}
