import AxiosSpotify from "@/lib/api/AxiosSpotify";

export const getCurrentTrack = async () => {
  const response = await AxiosSpotify.get("/me/player/currently-playing");
  return response.data;
};

export const getPlaybackState = async () => {
  const response = await AxiosSpotify.get("/me/player");
  return response;
};

export const skipToNext = async () => {
  await AxiosSpotify.post("/me/player/next");
};

export const skipToPrevious = async () => {
  await AxiosSpotify.post("/me/player/previous");
};

export const pausePlayback = async () => {
  await AxiosSpotify.put("/me/player/pause");
};
export const resumePlayback = async () => {
  await AxiosSpotify.put("/me/player/play");
};

export const updatePlaybackVolume = async (volume: number) => {
  await AxiosSpotify.put(
    "https://api.spotify.com/v1/me/player/volume?volume_percent=" + volume
  );
};
