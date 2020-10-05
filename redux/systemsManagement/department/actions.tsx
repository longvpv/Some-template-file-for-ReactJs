import { departmentModal, CreateDepartmentModal } from '../../../@types/company/createDepartment'


export const departmentActionTypes = {
    CREATE_DEPARTMENT: 'CREATE_DEPARTMENT',
    UPDATE_DEPARTMENT: 'UPDATE_DEPARTMENT',
    DELETE_DEPARTMENT: 'DELETE_DEPARTMENT',
    GET_DEPARTMENT: 'GET_DEPARTMENT',
    SET_DEPARTMENT: 'SET_DEPARTMENT',
    GET_DEPARTMENT_DETAIL: 'GET_DEPARTMENT_DETAIL',
    SET_DEPARTMENT_DETAIL: 'SET_DEPARTMENT_DETAIL'
}

export const getDepartment = () => ({
    type: departmentActionTypes.GET_DEPARTMENT
})

export const getDepartmentDetail = () => ({
    type: departmentActionTypes.GET_DEPARTMENT_DETAIL
})

export function setDepartment(departmentList: Array<departmentModal>) {
    return {
        type: departmentActionTypes.SET_DEPARTMENT,
        departmentList
    }
}

export function createDepartment(department: CreateDepartmentModal) {
    return {
        type: departmentActionTypes.CREATE_DEPARTMENT,
        department
    }
}