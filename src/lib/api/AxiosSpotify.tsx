import axios from "axios";
import { getSession } from "next-auth/react";

const AxiosSpotify = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SPOTIFY_BASE_URL,
  });
  instance.interceptors.request.use(async (request: any) => {
    const session = await getSession();
    if (session) {
      request.headers.Authorization = `Bearer ${session.access_token}`;
    }
    return request;
  });
  instance.interceptors.request.use(
    (response) => {
      return response;
    },
    (error) => {
      return error;
    }
  );
  return instance;
};
export default AxiosSpotify();
