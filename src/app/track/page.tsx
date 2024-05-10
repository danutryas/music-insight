"use client";

import BlurryCard from "@/components/cards/BlurryCard";
import AlbumSection from "@/components/pages/track/AlbumSection";
import PlaybackSection from "@/components/pages/track/PlaybackSection";
import ContextSection from "@/components/pages/track/TrackContext";
import { getCurrentTrack } from "@/services/player";
import { Track } from "@/types/track";
import { useEffect, useState } from "react";

const TrackPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getCurrentTrack()
      .then((e) => {
        setCurrentTrack(e);
        // console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <div className="">Loading...</div>;

  if (typeof currentTrack === "string")
    return <div className="">Your Spotify doesn't play anything</div>;

  if (currentTrack)
    return (
      <>
        <div className="flex gap-5 mt-10">
          <BlurryCard>
            {currentTrack ? (
              <>
                <p>name : {currentTrack.item.name}</p>
                <p>id : {currentTrack.item.id} </p>
                <div>
                  <p>href :</p>
                  <a href={currentTrack.item.href}>{currentTrack.item.href}</a>
                </div>
              </>
            ) : null}
          </BlurryCard>
          <div className="basis-2/5">
            <AlbumSection album={currentTrack.item.album} />
          </div>
        </div>
        <div className="flex gap-5 mt-10">
          {currentTrack.context && (
            <div className="basis-3/5">
              <ContextSection context={currentTrack.context} />
            </div>
          )}
        </div>
      </>
    );
};

export default TrackPage;
