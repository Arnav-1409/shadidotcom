import ACTIONS from '../constants/actions';
import { take, call, put, select, all } from 'redux-saga/effects';
import { usersAction } from './../actions';
import axios from 'axios';

function usersDetails(API_URL, data) {
  let { page, limit } = data;
  let LOGIN_URL = API_URL + `users?_page=${page}&_limit=${limit}`;
  return axios({
    url: LOGIN_URL,
    method: 'GET',
    data: {},
    headers: {
      "Content-type": "application/json",
    },
  })
    .catch(err => {
      console.log(err);
    });
}
export default function* getUsers() {
  while (true) {
    const action = yield take(ACTIONS.SEND_USERS_REQUEST);
    try {
      const API_URL = yield select((state) => state.app.API_URL);
      const [response] = yield all([call(usersDetails, API_URL, action.payload)]);
      const item = response && response.data;
      if (item) {
        yield put(usersAction.fetchUsersSuccess(item));
      } else {
        let data = {
          'message': 'Error occured',
          'success': false
        }
        yield put(usersAction.fetchUsersError(data));
      }
    }
    catch (e) {
      let data = {
        'message': 'Server Error',
        'success': false
      }
      yield put(usersAction.fetchUsersError(data))
    }
  }
}
