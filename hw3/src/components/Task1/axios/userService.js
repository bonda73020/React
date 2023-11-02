import {axiosService} from "./AxiosService";
import {urls} from "./URLs";

const userService = {
    getAll:()=>axiosService.get(urls.users),
    newUser:(user)=>axiosService.post(urls.users,user)
}

export {
    userService
}