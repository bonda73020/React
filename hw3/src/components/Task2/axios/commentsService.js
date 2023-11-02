import {comments} from "./urls";
import {axiosService} from "./axiosService";
const commentsService = {
    getAll:()=>axiosService.get(comments),
    newComment:(comment)=>axiosService.post(comments,comment)
}


export {
    commentsService
}