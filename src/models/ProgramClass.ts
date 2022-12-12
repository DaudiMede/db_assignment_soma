import axios from "axios";
import { CLASS_URLS } from "../constants/api_urls";
import { initialClassData } from "../constants/initial_type_data";
import { typeClass } from "../constants/types";

class ProgramClass {

   public save = async (classData:typeClass):Promise<typeClass> => {
        let programClass:typeClass = initialClassData;
        await axios.post(CLASS_URLS.CREATE, classData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                programClass = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return programClass;
    }

    public getAll = async ():Promise<typeClass[]> => {
        let programClassList:typeClass[] = [];
        await axios.get(CLASS_URLS.LIST)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                programClassList = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return programClassList;
    }

    public getById = async (programClassId:number):Promise<typeClass> => {
        let programClass:typeClass = initialClassData;
        await axios.get(`${CLASS_URLS.GET} + ${programClassId}`)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                programClass = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return programClass;
    }

    public updateprogramClass = async (classData:typeClass, programClassId:number):Promise<typeClass> => {
        let programClass:typeClass = initialClassData;
        await axios.post(`${CLASS_URLS.UPDATE} + ${programClassId}`, classData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                programClass = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return programClass;
    }
}


export default ProgramClass;