import axios from "axios";
import {baseURL, launchesURL} from "../constants/urls";

const axiosService = axios.create({baseURL:baseURL})
const launchesService = axios.create({baseURL:launchesURL})
export {
    axiosService,
    launchesService
}