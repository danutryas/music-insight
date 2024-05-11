import BlurryCard from "@/components/cards/BlurryCard";
import { Context } from "@/types/track";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ContextSection {
  context: Context;
}

const ContextSection: React.FC<ContextSection> = (props) => {
  const { context } = props;
  const [data, setData] = useState<any>(null);
  const { data: session } = useSession();

  useEffect(() => {
    axios
      .get(context.href, {
        headers: { Authorization: "Bearer " + session?.access_token },
      })
      .then((e) => {
        setData(e.data);
      });
  }, [session]);

  const renderData = () => {
    if (data) {
      return Object.entries(data).map(([key, value]) => {
        const keys = [
          //   //   "album_type",
          //   //   "available_markets",
          //   //   "release_date_precision",
          //   "type",
          //   "uri",
          "href",
          "next",
          "limit",
          "offset",
          "previous",
          "total",
          //   "external_urls",
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
  return (
    <BlurryCard>
      <div className="flex flex-col justify-between min-h-44 h-full">
        <div className="">
          <h4 className="text-center capitalize">
            {context.type === "collection" ? "Liked Song" : context.type}
          </h4>
          {/* <ul>{renderData()}</ul> */}
          <ul>
            {data &&
              data.items &&
              data.items.map((e: any, index: number) => (
                <p key={index}>{index + 1 + " : " + e.track.name}</p>
              ))}
          </ul>
        </div>
        <div className="self-center text-center">
          <Link
            href={context.external_urls.spotify}
            target="_blank"
            className="self-center"
          >
            OPEN ON SPOTIFY
          </Link>
          <p>{"Call api Called: " + context.href}</p>
        </div>
      </div>
    </BlurryCard>
  );
};

export default ContextSection;
