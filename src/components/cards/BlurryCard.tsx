import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface BlurryCard {
  className?: string;
}

const BlurryCard: React.FC<PropsWithChildren<BlurryCard>> = (props) => {
  const { children, className } = props;
  return (
    <div
      className={twMerge(
        "container w-full h-full rounded-lg  bg-bgContent border-bgColor border-[3px] blur-outline px-3 py-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BlurryCard;
