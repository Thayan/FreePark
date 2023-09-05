import { AxiosError } from "axios";
import axios from "./axios";

const getSearchResults = async (location: string) => {
  try {
    const post = await axios.get(`/parking/${location}`);

    return post;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(axiosError.response.data);
      console.log(axiosError.response.status);
      console.log(axiosError.response.headers);
    } else if (axiosError.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser
      // and an instance of http.ClientRequest in node.js
      console.log(axiosError.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", axiosError.message);
    }
  }
};

export default getSearchResults;
