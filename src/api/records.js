import Axios from "axios";

export const recordApi = Axios.create({
  baseURL: `${location.origin}/api/soldRecords`,
  headers: { "Content-Type": "application/json" },
});
