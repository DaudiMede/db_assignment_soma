import axios from "axios";
import { MODULE_URLS } from "../constants/api_urls";
import { initialModuleData } from "../constants/initial_type_data";
import { typeModule } from "../constants/types";

class Module {

    public save = async (moduleData:typeModule):Promise<typeModule> => {
        let module:typeModule = initialModuleData;
        await axios.post(MODULE_URLS.CREATE, moduleData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                module = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return module;
    }

    public getAll = async ():Promise<typeModule[]> => {
        let moduleList:typeModule[] = [];
        await axios.get(MODULE_URLS.LIST)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                moduleList = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return moduleList;
    }

    public getById = async (moduleId:number):Promise<typeModule> => {
        let module:typeModule = initialModuleData;
        await axios.get(`${MODULE_URLS.GET} + ${moduleId}`)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                module = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return module;
    }

    public updateModule = async (moduleData:typeModule, moduleId:number):Promise<typeModule> => {
        let module:typeModule = initialModuleData;
        await axios.post(`${MODULE_URLS.UPDATE} + ${moduleId}`, moduleData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                module = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return module;
    }
}

export default Module;