export interface departmentModal {
    id: number,
    departmentName: string,
    companyId: number,
    departmentAddress: string,
    description: string,
    active: boolean,
    parentId: number
}

export interface DepartmentDetailModal {
    id: number,
    departmentName: string,
    companyId: number,
    departmentAddress: string,
    description: string,
    active: boolean,
    parentId: number,
    staffs: [
    {
        id: number,
        name: string,
        avatar: string,
        companyObjectType: number,
        departmentId: number,
        departmentName: string
    }]
}

export interface CreateDepartmentModal {
    departmentName: string,
    companyId: number,
    departmentAddress: string,
    description: string,
    active: boolean,
    parentId: number
}

export interface SystemsDepartmentState {
    departmentModal: departmentModal
    departmentData: Array<departmentModal>
    departmentDetailModal: DepartmentDetailModal
    createDepartmentModal: CreateDepartmentModal
}