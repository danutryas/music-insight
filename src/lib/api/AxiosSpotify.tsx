import axios, { AxiosInstance } from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

// SpotifyInstance.interceptors.request.use(
//   (config) => {
//     const { data: session } = useSession();
//     // Modify config based on session data
//     if (session && session.access_token) {
//       config.headers.Authorization = `Bearer ${session.access_token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default SpotifyInstance;
export function useAxiosWithSession() {
  const axiosInstance = axios.create({
    baseURL: "https://api.spotify.com/v1",
    timeout: 1000,
  });

  const { data: session } = useSession();

  useEffect(() => {
    // Create Axios instance
    // Add interceptor
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        // Modify config based on session data
        if (session && session.user && session.user.accessToken) {
          config.headers.Authorization = `Bearer ${session.user.accessToken}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Clean up interceptor on unmount
    return () => {
      if (axiosInstance)
        axiosInstance.interceptors.request.eject(requestInterceptor);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]); // Re-run effect when session changes

  return axiosInstance;
}
