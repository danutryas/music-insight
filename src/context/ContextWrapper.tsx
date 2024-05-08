import { PlaybackProvider } from "./PlaybackContext";

const ContextWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <PlaybackProvider>{children}</PlaybackProvider>;
};

export default ContextWrapper;
