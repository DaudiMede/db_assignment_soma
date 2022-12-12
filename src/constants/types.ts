
export type typeStudent  = {
    id?:number;
    firstName:string;
    middleName:string;
    lastName:string;
    gender:string;
    email:string;
    phoneNumber:string;
    cseeIndex:string;
    disability:string;
    address:string;
    guardianContact:string;
    guardianName:string;
    enrollmentStatus:string;
    status:string;
    regNumber:string;
    course:number;
    category: number;
}

export type typeDepartment = {
    id?:number;
    departmentName:string;
    hodId?:number;
    status:string;
}

export type typeEntryCategory = {
    id?:number;
    categoryName:string;
    status:string;
    shortCode:string;
}

export type typeCourse = {
    id?:number;
    courseName:string;
    department: number;
    category: number;
    status:string;
}

export type typeNtaLevel = {
    id?:number;
    ntaLevel:number;
    numberOfSemester:number;
}

export type typeModule = {
    id?:number;
    moduleName:string;
    moduleCode:string;
    department: number;
    moduleNumber: number;
    semester:number;
    subjectCategory:string;
    ntaLevel:number;
    credits:number;
    status:string;
}

export type typeStaff = {
    id?:number;
    firstName:string;
    middleName:string;
    lastName:string;
    gender:string;
    phoneNumber:string;
    email:string;
    departmentId:number;
    status:string;
    roleId?:number;
}

export type typeRole = {
    id?:number;
    roleName:string;
    status:string;
}

export type typeClass = {
    id?:number;
    className:string;
    courseId:number;
    ntaLevel:number;
    startingYear:string;
    status:string;
}

export type typeUser = {
    id?:number;
    username:string;
    password:string;
    email: string;
    roleId:number;
    roles:typeRole[];
}

export type typeResult = {
    id?:number;
    ca:number;
    fe:number;
    regNumber:string;
    module:number;
    semester:number;
    academicYear:string;
    status:string;
}

export type typeAuth = {
    username:string;
    password:string;
}