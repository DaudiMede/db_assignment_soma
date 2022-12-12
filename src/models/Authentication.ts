import axios from "axios";
import { AUTH_URLS } from "../constants/api_urls";
import { initialUserData } from "../constants/initial_type_data";
import { typeAuth, typeUser } from "../constants/types";

class Authentication {

    public authenticateUser = async (authInfo:typeAuth) => {
        let userData:typeUser = initialUserData;
        
        await axios.post(AUTH_URLS.AUTH, authInfo)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                userData = response.data.responseBody;
            }
        })
        .catch((error) => {
            // throw("Request Failed" + error.message);
        })

        return userData;
    }

}

export default Authentication;