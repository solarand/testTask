import axios from "axios";

const api = axios.create({
  baseURL: "http://test-backend.itdelta.agency/api",
});

export default api;
