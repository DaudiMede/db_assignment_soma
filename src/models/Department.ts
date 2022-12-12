import axios from "axios";
import { DEPARTMENT_URLS } from "../constants/api_urls";
import { initialDeptData } from "../constants/initial_type_data";
import { typeDepartment } from "../constants/types";

class Department {

    public save = async (departmentData:typeDepartment):Promise<typeDepartment> => {
        let department:typeDepartment = initialDeptData;
        await axios.post(DEPARTMENT_URLS.CREATE, departmentData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                department = response.data.responseBody;
            }
        })
        .catch((error) => {
            
        });

        return department;
    }

    public getAll = async ():Promise<typeDepartment[]> => {
        let departmentList:typeDepartment[] = [];
        await axios.get(DEPARTMENT_URLS.LIST)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                departmentList = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

      return departmentList;
    }

    public getById = async (departmentId:number):Promise<typeDepartment> => {
        let department:typeDepartment = initialDeptData;
        await axios.get(`${DEPARTMENT_URLS.GET} + ${departmentId}`)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                department = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return department;
    }

    public update = async (departmentData:typeDepartment, departmentId:number):Promise<typeDepartment> => {
        let department:typeDepartment = initialDeptData;
        await axios.post(`${DEPARTMENT_URLS.UPDATE} + ${departmentId}`)
        .then((response) => {
            if(response.status && response.data.responseCode === "0"){
                department = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return department;
    }
}

export default Department;