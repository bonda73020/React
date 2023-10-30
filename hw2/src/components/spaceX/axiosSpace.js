import {launchesService} from "../axios/axiosService";

const axiosSpace = {
    getAll:()=>launchesService.get('/launches')
}

export {
    axiosSpace
}