import { typeAuth, typeClass, typeCourse, typeDepartment, typeEntryCategory, typeModule, typeNtaLevel, typeRole, typeStaff, typeUser } from "./types"

export const studentInitialdata = {
     firstName:"",
    middleName:"",
    lastName:"",
    gender:"",
    address:"",
    phoneNumber:"",
    email:"",
    cseeIndex:"",
    disability:"",
    guardianContact:"",
    guardianName:"",
    regNumber:"",
    category: 1,
    enrollmentStatus:"",
    status:"",
    course:1
}

export const initialDeptData:typeDepartment = {
    departmentName:"",
    status:""
}

export const initialEntyCatData:typeEntryCategory = {
    categoryName: "",
    status:"",
    shortCode:""
}

export const initialCourseData:typeCourse = {
    courseName:"",
    department:1,
    category:1,
    status:"ACTIVE"
}


export const initialNTAData:typeNtaLevel = {
    ntaLevel:4,
    numberOfSemester:2
}

export const initialModuleData:typeModule = {
    moduleName:"",
    moduleCode:"",
    subjectCategory:"",
    status:"",
    moduleNumber:1,
    ntaLevel:4,
    credits:6,
    department:1,
    semester:1
}

export const initialRoleData:typeRole = {
    roleName:"",
    status:""
}

export const initialStaffData:typeStaff = {
    firstName:"",
    middleName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    gender:"",
    departmentId:1,
    status:"ACTIVE"
}

export const initialClassData:typeClass = {
    className:"",
    status:"",
    courseId:1,
    ntaLevel:4,
    startingYear:"",
}

export const initialUserData:typeUser = {
    username:"",
    email:"",
    password:"",
    roleId:1,
    roles:[]
}

export const initialAuthData:typeAuth = {
    username:"",
    password:""
}
