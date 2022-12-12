import axios from "axios";
import { STAFF_URLS } from "../constants/api_urls";
import { initialStaffData } from "../constants/initial_type_data";
import { typeStaff } from "../constants/types";

class Staff{

    public save = async (staffData:typeStaff):Promise<typeStaff> => {
        let staff:typeStaff = initialStaffData;
        await axios.post(STAFF_URLS.CREATE, staffData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                staff = response.data.responseBody;
            }
        })
        .catch((error) => {
            //throw ("Request Failed " + error.message);
        });

        return staff;
    }

    public getAll = async ():Promise<typeStaff[]> => {
        let staffList:typeStaff[] = [];
        await axios.get(STAFF_URLS.LIST)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                staffList = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return staffList;
    }

    public getById = async (staffId:number):Promise<typeStaff> => {
        let staff:typeStaff = initialStaffData;
        await axios.get(`${STAFF_URLS.GET} + ${staffId}`)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                staff = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return staff;
    }

    public updateStaff = async (staffData:typeStaff, staffId:number):Promise<typeStaff> => {
        let staff:typeStaff = initialStaffData;
        await axios.post(`${STAFF_URLS.UPDATE} + ${staffId}`, staffData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                staff = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return staff;
    }
}

export default Staff;