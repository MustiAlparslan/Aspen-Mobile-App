import useStore from "@/store/useStore";
import axios, { AxiosError } from "axios";





export const GET_RECOMMENDS = async (): Promise<any> => {
  const { currentCategory, currentCountry } = useStore.getState();
  try {
    const response = await axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/recommends?country=${currentCountry}&category=${currentCategory} `);
    return response?.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};



export const GET_POPULAR = async (): Promise<any> => {
  const { currentCategory, currentCountry } = useStore.getState();
  try {
    const response = await axios.get(`${process.env.EXPO_PUBLIC_BASE_URL}/popular?country=${currentCountry}&category=${currentCategory} `);
    return response?.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};