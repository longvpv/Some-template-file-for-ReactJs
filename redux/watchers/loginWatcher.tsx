// import { actionTypes, setUserProfile, setUserSettings, setAlert, prepareUserProfileData } from "../profile/actions";
import { all, takeLatest, put, takeEvery } from 'redux-saga/effects'
import { actionTypes } from '../login/actions'
import httpClient from '../../services/httpService';
import authorizationService from '../../services/authorizationService';
import LoginOutputModel from '../../@types/users/loginOutputModel';
import _ from 'lodash'
import LoginInputModel from '../../@types/users/loginInputModel';

function* login(action: { type: string, loginModal: LoginInputModel }) {

  const loginModal = action.loginModal;
  try {
    // action.onLoading(true);

    const result: LoginOutputModel = yield httpClient.post('/Account/SystemAccount/Login', loginModal);
    if (!_.isEmpty(result.accessToken) && !_.isEmpty(result.refreshToken)) {
      authorizationService.setCookies(result.accessToken, result.refreshToken);
    }
    console.log(result);

  } catch (e) {

  } finally {
    // action.onLoading(false);
  }
}





export default function* loginWatcher() {
  yield all([
    takeLatest(actionTypes.LOGIN, login),
  ])
}