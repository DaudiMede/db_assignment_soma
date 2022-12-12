import axios from "axios";
import { ENTRY_CATEGORY_URL } from "../constants/api_urls";
import { initialEntyCatData } from "../constants/initial_type_data";
import { typeEntryCategory } from "../constants/types";

class EntryCategory {

    public save = async (categoryData:typeEntryCategory):Promise<typeEntryCategory> => {
        let category = initialEntyCatData;
        await axios.post(ENTRY_CATEGORY_URL.CREATE, categoryData)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                category = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return category;
    }

    public getAll = async ():Promise<typeEntryCategory[]> => {
        let entryCategoryList:typeEntryCategory[] = [];
        await axios.get(ENTRY_CATEGORY_URL.LIST)
        .then((response) => {
            if(response.status === 200 && response.data.responseCode === "0"){
                entryCategoryList = response.data.responseBody;
            }
        })
        .catch((error) => {

        });

        return entryCategoryList;
    }
}

export default EntryCategory;