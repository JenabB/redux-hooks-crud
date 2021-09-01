import axios from "axios";

const clientAxios = axios.create({
  baseURL: "https://my-json-server.typicode.com/jhonsnake/productos-server/",
});

export default clientAxios;
