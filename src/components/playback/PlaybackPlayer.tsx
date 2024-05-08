import { useEffect, useState } from "react";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import {
  pausePlayback,
  resumePlayback,
  skipToNext,
  skipToPrevious,
} from "@/services/player";
import usePlayback from "@/context/PlaybackContext";

const PlaybackPlayer = () => {
  // const;
  const { playback, refreshPlayback } = usePlayback();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const onNext = async () => {
    skipToNext().finally(() => {
      refreshPlayback();
    });
  };
  const onPrev = async () => {
    skipToPrevious().finally(() => {
      refreshPlayback();
    });
  };
  const onPausePlay = async () => {
    if (isPlaying) {
      pausePlayback()
        .then(() => {
          setIsPlaying(false);
        })
        .finally(() => {
          refreshPlayback();
        });
    } else {
      resumePlayback()
        .then(() => {
          setIsPlaying(true);
        })
        .finally(() => {
          refreshPlayback();
        });
    }
  };

  useEffect(() => {
    if (playback) {
      setIsPlaying(playback.is_playing);
    }
  }, [playback]);

  return (
    <div className="w-5/12 flex justify-center gap-4">
      <div className="cursor-pointer " onClick={() => onPrev()}>
        <SkipPreviousRoundedIcon />
      </div>
      <div className="cursor-pointer " onClick={() => onPausePlay()}>
        {isPlaying ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
      </div>
      <div className="cursor-pointer " onClick={() => onNext()}>
        <SkipNextRoundedIcon />
      </div>
    </div>
  );
};

export default PlaybackPlayer;
