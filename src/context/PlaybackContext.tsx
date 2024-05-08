"use client";
import { getPlaybackState } from "@/services/player";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Playback } from "@/types/playback";

interface PlaybackContext {
  refreshPlayback: () => void;
  playback: Playback | null;
  isPlaybackLoading: boolean;
}

const PlaybackContext = createContext<PlaybackContext>({
  refreshPlayback: () => {},
  playback: null,
  isPlaybackLoading: true,
});

export const PlaybackProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [playback, setPlayback] = useState<Playback | null>(null);
  const [isPlaybackLoading, setIsPlaybackLoading] = useState<boolean>(false);

  const refreshPlayback = () => {
    getPlaybackState().then((data) => {
      setPlayback(data);
      console.log(data);
    });
  };

  useEffect(() => {
    getPlaybackState()
      .then((data) => setPlayback(data))
      .finally(() => setIsPlaybackLoading(false));
  }, []);

  return (
    <PlaybackContext.Provider
      value={{ refreshPlayback, playback, isPlaybackLoading }}
    >
      {children}
    </PlaybackContext.Provider>
  );
};

const usePlayback = () => {
  const data = useContext(PlaybackContext);
  return { ...data };
};
export default usePlayback;
