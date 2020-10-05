import { departmentActionTypes } from './actions';
import { SystemsDepartmentState } from '../../../@types/company/createDepartment';


const initializeState: SystemsDepartmentState = {
    departmentModal: {
        id: 0,
        departmentName: '',
        companyId: 0,
        departmentAddress: '',
        description: '',
        active: true,
        parentId: 0
    },
    departmentData: [],
    
    departmentDetailModal: {
        id: 0,
        departmentName: '',
        companyId: 0,
        departmentAddress: '',
        description: '',
        active: true,
        parentId: 0,
        staffs: [
        {
            id: 0,
            name: '',
            avatar: '',
            companyObjectType: 100,
            departmentId: 0,
            departmentName: ''
        }]
    },

    createDepartmentModal: null
}

export default function reducer(state = initializeState, action: any) {
    switch (action.type) {
        case departmentActionTypes.SET_DEPARTMENT:
            return {
                ...state,
                departmentData: action.departmentList
            }
        
        case departmentActionTypes.SET_DEPARTMENT_DETAIL:
            return {
                ...state,
                departmentData: action.departmentList
            }
        
        case departmentActionTypes.CREATE_DEPARTMENT:
            return {
                ...state,
                createDepartmentModal: action.department
            }
            
        default:
            return state
    }
}