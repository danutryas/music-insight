import { Artist, Item } from "@/types/playback";
import Image from "next/image";

const PlaybackInformation = ({ info }: { info: Item }) => {
  const { name, album, id, artists } = info;

  const getArtists = () => {
    if (artists.length === 1) {
      return <span>{artists[0].name}</span>;
    } else if (artists.length > 1) {
      return artists.map((artist, index) => (
        <>
          <ArtistName artist={artist} key={index} />
          {index < artists.length - 1 ? ", " : ""}
        </>
      ));
    } else {
      return <span>Unkown</span>;
    }
  };

  return (
    <div className="flex gap-4 items-center w-3/12">
      <div className="border w-16 border-white rounded-lg">
        <Image
          width={64}
          height={64}
          src={album.images[0].url}
          alt={id}
          style={{
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="flex flex-col gap-1 w-[calc(100%-64px)]">
        <h3 className="truncate whitespace-nowrap text-ellipsis max-w-full hover:text-ellipsis">
          {name}
        </h3>
        <div className="truncate whitespace-nowrap text-ellipsis max-w-full hover:text-ellipsis">
          {getArtists()}
        </div>
      </div>
    </div>
  );
};
export default PlaybackInformation;

const ArtistName = ({ artist }: { artist: Artist }) => {
  return (
    <a href="" className="text-gray-500">
      {artist.name}
    </a>
  );
};
