import * as yup from 'yup';

export const studentSchema = yup.object().shape({
    firstName:yup.string()
    .required("First Name is required"),
    middleName:yup.string(),
    lastName:yup.string()
    .required("Last Name is Required"),
    gender:yup.string().required("Please Select Gender"),
    email: yup.string().required("Email is Required").email("Please Provide a valid email"),
    phoneNumber:yup.string().required(),
    cseeIndex:yup.string(),
    guardianContact:yup.string(),
    guardianName:yup.string().required("Please Provide guardian Name"),
});