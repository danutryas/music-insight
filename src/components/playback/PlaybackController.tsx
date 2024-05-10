"use client";
import { useEffect, useState } from "react";

import VolumeMuteRoundedIcon from "@mui/icons-material/VolumeMuteRounded";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import { updatePlaybackVolume } from "@/services/player";
import usePlayback from "@/context/PlaybackContext";

const PlaybackController = () => {
  const { playback, isPlaybackLoading } = usePlayback();

  const [volume, setVolume] = useState<number>(50);
  const [isMute, setIsMute] = useState<boolean>(false);

  const renderVolumeIcon = () => {
    if (isMute) return <VolumeOffRoundedIcon />;
    if (volume === 0) return <VolumeMuteRoundedIcon />;
    else if (volume <= 50) return <VolumeDownRoundedIcon />;
    else if (volume <= 100) return <VolumeUpRoundedIcon />;
    else return null;
  };

  const volumeHandler = () => {
    if (!isMute) return volume;
    return 0;
  };

  const muteHandler = () => {
    updatePlaybackVolume(isMute ? volume : 0);
    setIsMute((prev) => !prev);
  };

  useEffect(() => {
    if (playback) setVolume(playback.device.volume_percent);
  }, [playback]);

  return (
    <div className="w-3/12 flex justify-end gap-2">
      <button
        className=""
        onClick={muteHandler}
        disabled={!playback?.device.supports_volume}
      >
        {renderVolumeIcon()}
      </button>
      <input
        type="range"
        name="volume"
        id="volume"
        disabled={!playback?.device.supports_volume}
        value={volumeHandler()}
        onBlurCapture={(e) => {
          updatePlaybackVolume(Number(e.target.value));
          console.log(e.target.value);
        }}
        onChange={(e) => {
          setVolume(Number(e.target.value));
        }}
      />
    </div>
  );
};
export default PlaybackController;
