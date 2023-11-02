import axios from "axios";
import {baseURL} from "./URLs";

const axiosService = axios.create({baseURL})


export {
    axiosService
}