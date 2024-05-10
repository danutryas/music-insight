import BlurryCard from "@/components/cards/BlurryCard";
import { Album } from "@/types/track";

interface AlbumSection {
  album: Album | null;
}

const AlbumSection: React.FC<AlbumSection> = (props) => {
  const { album } = props;

  const renderData = () => {
    if (album) {
      return Object.entries(album).map(([key, value]) => {
        const keys = [
          "album_type",
          "available_markets",
          "release_date_precision",
          "type",
          "uri",
        ];
        if (keys.includes(key)) return;
        return (
          <li className="flex" key={key}>
            <p>{key}: </p>
            {(typeof value === "string" || typeof value === "number") && (
              <p>{value}</p>
            )}
          </li>
        );
      });
    }
  };
  if (album?.album_type === "album")
    return (
      <BlurryCard>
        <h4 className="text-center">ALBUM</h4>
        <ul>{renderData()}</ul>
      </BlurryCard>
    );

  //   return <ul>{renderData()}</ul>;
};

export default AlbumSection;
