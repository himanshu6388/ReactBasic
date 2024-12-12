import axios from "axios";


const  instance  = axios.create({
    baseURL: "https://facestoreapi.com/"
});

export default instance;