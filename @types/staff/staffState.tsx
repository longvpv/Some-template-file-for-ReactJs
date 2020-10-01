export interface StaffState {
  allStaff: Array<StaffInfo>
}

export interface StaffInfo {
  fullName: string,
  dob: string,
  userName: string,
  email: string,
  avatar: string,
  active: boolean,
  isSystemUser: boolean,
  genderId: number,
  companyJobTitleId: number,
  staffTypeId: number,
  lastLoginDate: string,
  id: number
}

export interface CreateStaffModal {
  fullName: string,
  dob: string,
  phoneNumber: string,
  email: string,
  avatar: string,
  active: boolean,
  isSystemUser: boolean,
  genderId: number,
  companyJobTitleId: number,
  staffTypeId: number,
  password: string

}