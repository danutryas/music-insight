import { getPlaybackState } from "@/services/player";
import { Playback } from "@/types/playback";
import { useEffect, useState } from "react";

interface PlaybackSection {}

const PlaybackSection: React.FC<PlaybackSection> = (props) => {
  const [playback, setPlayback] = useState<Playback | null>(null);

  useEffect(() => {
    getPlaybackState().then((e) => {
      setPlayback(e);
      console.log(e);
    });
  }, []);
  const renderData = () => {
    if (playback) {
      return Object.entries(playback).map(([key, value]) => {
        // const keys = [
        //   //   //   "album_type",
        //   //   //   "available_markets",
        //   //   //   "release_date_precision",
        //   //   "type",
        //   //   "uri",
        //   //   "href",
        //   //   "next",
        //   //   "limit",
        //   //   "offset",
        //   //   "previous",
        //   //   "total",
        //   //   "external_urls",
        // ];
        // if (keys.includes(key)) return;
        return (
          <li className="flex" key={key}>
            <p>{key}: </p>
            {typeof value === "string" ||
            typeof value === "number" ||
            typeof value === "boolean" ? (
              <p>{value.toString()}</p>
            ) : null}
            {/* <p>{typeof value}</p> */}
          </li>
        );
      });
    }
  };
  if (playback)
    return (
      <div className="border-white border-2 rounded-2xl min-h-44 h-full py-3 px-4">
        <div className="flex flex-col min-h-44 h-full">
          <h1 className="text-center">PLAYBACK</h1>
          <ul>{renderData()}</ul>
          <ul className="mt-10">
            <li>
              shuffle :{" "}
              {playback.shuffle_state && playback.smart_shuffle
                ? "True"
                : "False"}
            </li>
            <li>
              shuffle :{" "}
              {playback.shuffle_state
                ? "basic shuffle"
                : playback.smart_shuffle
                ? "smart shuffle"
                : ""}
            </li>
            <li>Repeat : {playback.repeat_state}</li>
            <li>progress: {playback.progress_ms} </li>
          </ul>
        </div>
      </div>
    );
  return <div className=""></div>;
};

export default PlaybackSection;
