import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid, ColDef, ValueGetterParams } from '@material-ui/data-grid';
// import { XGrid } from '@material-ui/x-grid';
import AppState from "../../../@types/appTypes/appState";
import { useDispatch, useSelector } from "react-redux";
import { reverse, sortBy } from 'lodash';


function createData(
  id: number,
  departmentName: string,
  rootDepartment: string,
  companyName: string,
  departmentAddress: string,
  description: string
) {
  return {
  id,
  departmentName,
  rootDepartment,
  companyName,
  departmentAddress,
  description
  };
}

// const defaultRow = [{
//   id: null,
//   departmentName: null,
//   rootDepartment: null,
//   companyName: null,
//   departmentAddress: null,
//   description: null
// }]

const columns: ColDef[] = [
  {field: 'departmentName', headerName: 'Tên bộ phận', width: 150},
  {field: 'rootDepartment', headerName: 'Bộ phận gốc', width: 150},
  {field: 'companyName', headerName: 'Công ty mẹ', width: 200},
  {field: 'departmentAddress', headerName: 'Địa chỉ', width: 300},
  {field: 'description', headerName: 'Mô tả', width: 300}
];

export default function DepartmentData() {
  const departmentList = useSelector((state: AppState) => state.systemDepartmentState.departmentData);
  const companyList = useSelector((state: AppState) => state.systemsCompanyState.companyData);

  // rows = departmentList ? departmentList : defaultRow
  

  var rows = departmentList.map((dept: any) => {
    const compName = companyList.find(comp => comp.id === dept.companyId)
    dept.companyName = compName ? compName.companyName : ''
    dept.rootDepartment = dept.parent ? dept.parent.departmentName : ''
    return dept
  })
  
  rows = rows.map(dept => createData(
    dept.id,
    dept.departmentName,
    dept.rootDepartment,
    dept.companyName,
    dept.departmentAddress,
    dept.description
    )).sort((a, b) => b.id-a.id);

  return (
    <div style={{ height: '630px', width: '100%', background: '#FFFFFF' }}>
      <DataGrid 
        rows={rows} 
        columns={columns} 
        pageSize={10} 
        checkboxSelection 
        paginationMode='server'
        sortingMode='server'
      />
    </div>
  );
}