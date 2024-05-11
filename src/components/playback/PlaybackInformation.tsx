import { Artist, Item } from "@/types/playback";
import { Image } from "antd";
// import Image from "next/image";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
const PlaybackInformation = ({ info }: { info: Item }) => {
  const { name, album, id, artists } = info;

  const getArtists = () => {
    if (artists.length === 1) {
      return <ArtistName artist={artists[0]} />;
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
      <div className=" rounded-lg flex justify-center items-centers w-16 h-16 ">
        <Image
          // <Image
          width={64}
          height={64}
          src={album.images[0].url}
          preview={{ mask: <ZoomOutMapIcon style={{ fontSize: 18 }} /> }}
          // alt={id}
          placeholder={false}
          style={{
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="flex flex-col w-[calc(100%-64px)]  ">
        <h3 className="truncate whitespace-nowrap text-ellipsis max-w-full hover:text-ellipsis cursor-pointer">
          <a
            href=""
            className="hover:text-textHover text-textColor cursor-pointer"
          >
            {name}
          </a>
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
    <a
      href=""
      className="hover:text-textHover text-textColor text-xs cursor-pointer"
    >
      {artist.name}
    </a>
  );
};
