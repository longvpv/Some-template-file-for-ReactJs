// import { actionTypes, setUserProfile, setUserSettings, setAlert, prepareUserProfileData } from "../profile/actions";
// import { all, takeLatest, put, takeEvery } from 'redux-saga/effects'
// import httpClient from '../../services/httpService';
// import { UserProfile, Alert } from "../../@types/profileTypes/userProfileModel";
// import { getAllSettings } from "../../services/accountSettingService";


// function* getUserProfile(action: { type: string }) {
//   const userProfile: UserProfile = yield httpClient.get('profile');
//   const settings = yield getAllSettings();
//   yield put(setUserSettings(settings));
//   yield put(setUserProfile(userProfile));
// }

// function* read_alert_action(action: { type: string, alert: Alert }) {
//   yield put(setAlert(action.alert));
//   yield put(prepareUserProfileData())
// }

// export default function* userProfileWatcher() {
//   yield all([
//     takeEvery(actionTypes.PREPARE_USER_PROFILE_DATA, getUserProfile),
//     takeLatest(actionTypes.DELETE_ALERT_FROM_LIST, getUserProfile),
//     takeLatest(actionTypes.READ_ALERT_ACTION, read_alert_action)
//   ])
// }

export default function* abc() {

}