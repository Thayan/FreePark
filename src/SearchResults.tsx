import axios from "./axios";

const getSearchResults = async (location: string) => {
  try {
    const post = await axios.get(`/parking/${location}`);

    return post;
  } catch (e) {
    return false;
  }
};

export default getSearchResults;
