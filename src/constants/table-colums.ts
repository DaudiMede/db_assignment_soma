import { GridColDef } from '@mui/x-data-grid';

export const studentsTableColumns:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: false,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: false,
    },
    {
        field: 'gender',
        headerName: 'Gender',
        width: 110,
        editable: false,
    },
     {
        field: 'regNumber',
        headerName: 'Reg No',
        width: 110,
        editable: false,
    },
     {
        field: 'status',
        headerName: 'Status',
        width: 110,
        editable: false,
    },
]

export const caResultColumns:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: false,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: false,
    },
     {
        field: 'regNumber',
        headerName: 'Reg No',
        width: 110,
        editable: false,
    },
     {
        field: 'ca',
        headerName: 'CA',
        type: 'number',
        width: 110,
        editable: true,
    },
]


export const departmentColumns:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'departmentName',
        headerName: 'Name',
        width: 150,
        editable: false,
    },
    {
        field: 'hodId',
        headerName: 'HOD',
        width: 150,
        editable: false,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 110,
        editable: false,
    },
]

export const entryCategoryColumns:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'categoryName',
        headerName: 'Name',
        width: 150,
        editable: false,
    },
     {
        field: 'shortCode',
        headerName: 'Short Code',
        width: 150,
        editable: false,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: false,
    },
]

export const courseColumns:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'courseName',
        headerName: 'Name',
        width: 150,
        editable: false,
    },
     {
        field: 'category',
        headerName: 'Category',
        width: 150,
        editable: false,
    },
    {
        field: 'department',
        headerName: 'Department',
        width: 150,
        editable: false,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: false,
    },
]

export const ntaLevelColums:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'ntaLevel',
        headerName: 'Level',
        width: 150,
        editable: false,
    },
     {
        field: 'numberOfSemester',
        headerName: 'Semesters',
        width: 150,
        editable: false,
    }
]

export const roleColumns:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'roleName',
        headerName: 'Role Name',
        width: 150,
        editable: false,
    },
     {
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: false,
    }
];

export const moduleColumns:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'moduleName',
        headerName: 'Module Name',
        width: 250,
        editable: false,
    },
     {
        field: 'moduleCode',
        headerName: 'Module Code',
        width: 150,
        editable: false,
    },
     {
        field: 'semester',
        headerName: 'Semesters',
        width: 150,
        editable: false,
    },
     {
        field: 'subjectCategory',
        headerName: 'Category',
        width: 150,
        editable: false,
    },
     {
        field: 'credits',
        headerName: 'Credits',
        width: 150,
        editable: false,
    },
     {
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: false,
    }
];

export const staffColumns:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First Name',
        width: 150,
        editable: false,
    },
     {
        field: 'middleName',
        headerName: 'Middle Name',
        width: 150,
        editable: false,
    },
     {
        field: 'lastName',
        headerName: 'Last Name',
        width: 150,
        editable: false,
    },
     {
        field: 'email',
        headerName: 'Email',
        width: 150,
        editable: false,
    },
     {
        field: 'phoneNumber',
        headerName: 'Phone Number',
        width: 150,
        editable: false,
    },
     {
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: false,
    }
];

export const classColumns:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'className',
        headerName: 'Class Name',
        width: 150,
        editable: false,
    },
     {
        field: 'startingYear',
        headerName: 'Starting Year',
        width: 150,
        editable: false,
    },
     {
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: false,
    }
];

export const userColumns:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'username',
        headerName: 'User Name',
        width: 150,
        editable: false,
    },
     {
        field: 'email',
        headerName: 'Email',
        width: 150,
        editable: false,
    },
     {
        field: 'status',
        headerName: 'Status',
        width: 150,
        editable: false,
    }
];