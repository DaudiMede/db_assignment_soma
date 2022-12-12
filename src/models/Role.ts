import axios from "axios";
import { ROLE_URLS } from "../constants/api_urls";
import { initialRoleData } from "../constants/initial_type_data";
import { typeRole } from "../constants/types";

class Role{
 
    public save = async (roleData:typeRole):Promise<typeRole> => {
        let role:typeRole = initialRoleData;
        await axios.post(ROLE_URLS.CREATE, roleData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                role = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return role;
    }

    public getAll = async ():Promise<typeRole[]> => {
        let roles:typeRole[] = [];
         await axios.get(ROLE_URLS.LIST)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                roles = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return roles;
    }

    public getById = async (roleId:number):Promise<typeRole> => {
        let role:typeRole = initialRoleData;
         await axios.get(ROLE_URLS.GET)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                role = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return role;
    }

    public update = async (roleData:typeRole, roleId:number):Promise<typeRole> => {
        let role:typeRole = initialRoleData;
         await axios.post(`${ROLE_URLS.UPDATE} + ${roleId}`)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                role = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return role;
    }
}

export default Role;