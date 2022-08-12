import axios from "axios";

interface FetchDataType {
  path: string;
  method: string;
  data?: object;
}

const fetchData = async ({ path, method, data }: FetchDataType) => {
  if (!process.env.DB_HOST) {
    throw new Error("Check env variable");
  }
  if (!path || !method) {
    throw new Error("Check method and path is exist");
  }
  if (method.toLocaleLowerCase() !== "get" && !data) {
    throw new Error("Please send data");
  }
  const response = await axios(`${process.env.DB_HOST + path}`, {
    method,
    data,
  }).catch(error => {
    throw new Error(error);
  });
  return response.data;
};

export default fetchData;
