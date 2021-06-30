import axios from "axios";

// const baseURL = "https://luna-capricorn.propulsion-home.ch/backend/api/";
const baseURL = 'http://127.0.0.1:8000/backend/api/';

const Axios = axios.create({
  baseURL: baseURL,
});

Axios.defaults.baseURL = baseURL;
Axios.defaults.headers.post["Content-Type"] = "application/json";
Axios.defaults.headers.patch["Content-Type"] = "application/json";

export default Axios;
