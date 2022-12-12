import axios from "axios";
import { USER_URLS } from "../constants/api_urls";
import { initialUserData } from "../constants/initial_type_data";
import { typeUser } from "../constants/types";

class User{

     public save = async (userData:typeUser):Promise<typeUser> => {
        let user:typeUser = initialUserData;
        await axios.post(USER_URLS.CREATE, userData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                user = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return user;
    }

    public getAll = async ():Promise<typeUser[]> => {
        let users:typeUser[] = [];
         await axios.get(USER_URLS.LIST)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                users = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return users;
    }

    public getById = async (userId:number):Promise<typeUser> => {
        let user:typeUser = initialUserData;
         await axios.get(USER_URLS.GET)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                user = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return user;
    }

    public update = async (userData:typeUser, userId:number):Promise<typeUser> => {
        let user:typeUser = initialUserData;
         await axios.post(`${USER_URLS.UPDATE} + ${userId}`, userData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                user = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return user;
    }
}

export default User;