import axios from "axios";
import { NTA_URLS } from "../constants/api_urls";
import { initialNTAData } from "../constants/initial_type_data";
import { typeNtaLevel } from "../constants/types";


class NationalAward {

    public save = async (ntaData:typeNtaLevel):Promise<typeNtaLevel> => {
        let ntaLevel:typeNtaLevel = initialNTAData;
        await axios.post(NTA_URLS.CREATE, ntaData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                ntaLevel = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return ntaLevel;
    }

    public getAll = async ():Promise<typeNtaLevel[]> => {
        let ntaLevelList:typeNtaLevel[] = [];
        await axios.get(NTA_URLS.LIST)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                ntaLevelList = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return ntaLevelList;
    }
}

export default NationalAward;