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
  isEmpty: boolean;
}

const PlaybackContext = createContext<PlaybackContext>({
  refreshPlayback: () => {},
  playback: null,
  isPlaybackLoading: true,
  isEmpty: true,
});

export const PlaybackProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [playback, setPlayback] = useState<Playback | null>(null);
  const [isPlaybackLoading, setIsPlaybackLoading] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const refreshPlayback = () => {
    getPlaybackState().then((response) => {
      if (response.status === 200) {
        setIsEmpty(false);
      }
      setPlayback(response.data);
    });
  };

  useEffect(() => {
    getPlaybackState()
      .then((response) => {
        if (response.status === 200) {
          setIsEmpty(false);
        }
        setPlayback(response.data);
      })
      .finally(() => setIsPlaybackLoading(false));
  }, []);

  return (
    <PlaybackContext.Provider
      value={{ refreshPlayback, playback, isPlaybackLoading, isEmpty }}
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
