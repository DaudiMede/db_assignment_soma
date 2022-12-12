import { typeUser } from "../constants/types";

class LocalStorageManager {

    public saveDataToLocalStorage = (userData:typeUser) => {
        localStorage.clear();
        localStorage.setItem('username', userData.username);
        localStorage.setItem('userId', userData.id! as unknown as string);
        localStorage.setItem('email', userData.email);
        if(userData.roles.length > 0){
            userData.roles.forEach((role, index) => {
                localStorage.setItem('role' + index, role.roleName.toUpperCase())
            });
        }
    }

    public clearStorageData = () => {
        localStorage.clear();
    }

    public checkUserData = ():boolean => {
        let isDataAvailable:boolean = true;
        let userId = localStorage.getItem("userId");
        
        //console.log(userId);
        if(userId === null || userId === ''){
            isDataAvailable = false;
        }

        return isDataAvailable;
    }
}

export default LocalStorageManager;