"use client";
import BlurryCard from "../cards/BlurryCard";
import PlaybackController from "./PlaybackController";
import PlaybackInformation from "./PlaybackInformation";
import PlaybackPlayer from "./PlaybackPlayer";
import usePlayback from "@/context/PlaybackContext";

const Playback: React.FC = () => {
  const { playback, isPlaybackLoading, isEmpty } = usePlayback();
  if (!isEmpty)
    return (
      <BlurryCard className="mb-5 fixed bottom-0 h-auto">
        {!isPlaybackLoading && playback ? (
          <div className="flex justify-between items-center  text-white h-full ">
            <PlaybackInformation info={playback.item} />
            <PlaybackPlayer />
            <PlaybackController />
          </div>
        ) : (
          <div className="">Loading...</div>
        )}
      </BlurryCard>
    );
  return null;
};

export default Playback;
