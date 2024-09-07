import { SECRET_KEY, ACCESS_KEY, BASE_URL } from "@env"
import axios, { AxiosError } from "axios";



export const LIST_TOPICS = async () => {
    try {
      const RESPONSE = await axios.get(BASE_URL + '/topics')
      return RESPONSE.data;
    } catch (err) {
      let error = err as AxiosError;
      console.log(error);
      return error;
    }
  };