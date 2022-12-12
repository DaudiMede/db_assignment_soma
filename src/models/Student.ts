import axios from "axios";
import { STUDENT_URLS } from "../constants/api_urls";
import { studentInitialdata } from "../constants/initial_type_data";
import { typeStudent } from "../constants/types";

class Student{

    public save = async (studentData:typeStudent):Promise<typeStudent> => {
        let student:typeStudent = studentData;
        await axios.post(STUDENT_URLS.CREATE, studentData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                student = response.data.responseBody;
            }
        })
        .catch((error) => {
            //throw ("Request Failed " + error.message);
        });

        return student;
    }

    public getAll = async ():Promise<typeStudent[]> => {
        let students:typeStudent[] = [];
        await axios.get(STUDENT_URLS.LIST)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                students = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return students;
    }

    public getById = async (studentId:number):Promise<typeStudent> => {
        let student:typeStudent = studentInitialdata;
        await axios.get(`${STUDENT_URLS.GET} + ${studentId}`)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                student = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return student;
    }

    public updateStudent = async (studentData:typeStudent, studentId:number):Promise<typeStudent> => {
        let student:typeStudent = studentInitialdata;

        await axios.post(`${STUDENT_URLS.UPDATE }+ ${studentId}`, studentData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                student = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return student;
    }
}

export default Student;