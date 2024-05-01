import AxiosSpotify from "@/lib/api/AxiosSpotify";

export const getCurrentTrack = async () => {
  const response = await AxiosSpotify.get("/me/player/currently-playing");
  return response.data;
};

export const getPlaybackState = async () => {
  const response = await AxiosSpotify.get("/me/player");
  return response.data;
};
