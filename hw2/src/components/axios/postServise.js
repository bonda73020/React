import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postServise = {
    getAll:()=>axiosService.get(urls.posts.base),
    getById:(id)=>axiosService.get(urls.posts.byId(id))
}


export {
    postServise
}