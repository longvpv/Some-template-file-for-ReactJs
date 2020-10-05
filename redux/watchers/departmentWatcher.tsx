import { all, takeLatest, put, takeEvery } from 'redux-saga/effects'
import { departmentActionTypes, setDepartment } from '../systemsManagement/department/actions'

import httpClient from '../../services/httpService';
import { departmentModal, CreateDepartmentModal } from '../../@types/company/createDepartment';


function* getDepartmentList(action: {type: string}) {
  try {
    const result = yield httpClient.get(`SystemsManagement/CompanyDepartment?pageSize=10`)
    console.log(result)
    const departmentList: Array<departmentModal> = result.data;
    yield put(setDepartment(departmentList));
  } 
  
  catch (e) {
    console.log(e)
  }
}

function* createDepartment(action: {type: string, department: CreateDepartmentModal}) {
  const createDepartmentModal = action.department
  try {
    const result = yield httpClient.post('SystemsManagement/CompanyDepartment', createDepartmentModal)
  } 
  
  catch (e) {
    console.log(e)
  }
}

export default function* departmentWatcher() {
  yield all([
    takeLatest(departmentActionTypes.GET_DEPARTMENT, getDepartmentList),
    takeLatest(departmentActionTypes.CREATE_DEPARTMENT, createDepartment),

  ])
}