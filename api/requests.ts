import axios, { AxiosError } from "axios";



export const GET_RECOMMENDS = async (): Promise<any> => {
  try {
    const response = await axios.get(process.env.EXPO_PUBLIC_BASE_URL + '/recommends');
    return response?.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};



export const GET_POPULAR = async (): Promise<any> => {
  try {
    const response = await axios.get(process.env.EXPO_PUBLIC_BASE_URL + '/popular');
    return response?.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};