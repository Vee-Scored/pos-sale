import Axios from "axios";

export const productApi = Axios.create({
  baseURL: `${location.origin}/api/products`,
  headers: { "Content-Type": "application/json" },
});
