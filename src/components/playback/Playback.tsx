"use client";
import BlurryCard from "../cards/BlurryCard";
import PlaybackController from "./PlaybackController";
import PlaybackInformation from "./PlaybackInformation";
import PlaybackPlayer from "./PlaybackPlayer";
import usePlayback from "@/context/PlaybackContext";

const Playback: React.FC = () => {
  const { playback, isPlaybackLoading } = usePlayback();

  return (
    <BlurryCard className="mb-5 absolute bottom-0 h-auto">
      {!isPlaybackLoading && playback ? (
        <div className="flex justify-between py-2 items-center px-3 text-white h-full ">
          <PlaybackInformation info={playback.item} />
          <PlaybackPlayer />
          <PlaybackController />
        </div>
      ) : (
        <div className="">Loading...</div>
      )}
    </BlurryCard>
  );
};

export default Playback;
