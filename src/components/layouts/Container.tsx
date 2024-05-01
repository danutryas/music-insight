import { PropsWithChildren } from "react";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="container mx-auto w-full">{children}</div>;
};
