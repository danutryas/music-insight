"use client";
import PlaybackController from "./PlaybackController";
import PlaybackInformation from "./PlaybackInformation";
import PlaybackPlayer from "./PlaybackPlayer";
import usePlayback from "@/context/PlaybackContext";

const Playback: React.FC = () => {
  const { playback, isPlaybackLoading } = usePlayback();

  return (
    <div className="container w-full h-20 rounded-xl mb-5 absolute bottom-0 bg-[#232B35] shadow-sm border-white border">
      {!isPlaybackLoading && playback ? (
        <div className="flex justify-between py-2 items-center px-3 text-white h-full ">
          <PlaybackInformation info={playback.item} />
          <PlaybackPlayer />
          <PlaybackController />
        </div>
      ) : (
        <div className="">Loading...</div>
      )}
    </div>
  );
};

export default Playback;
