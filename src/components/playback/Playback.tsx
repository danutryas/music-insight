interface Playback {}

const Playback: React.FC<Playback> = () => {
  return (
    <div className="container w-full h-20 rounded-xl border-2 border-white mb-5 absolute bottom-0">
      <div className="flex justify-between py-2 items-center px-3 text-white h-full">
        <Information />
        <Player />
        <Controller />
      </div>
    </div>
  );
};

export default Playback;

const Information = () => {
  return <div className="">a</div>;
};
const Player = () => {
  return <div className="">b</div>;
};
const Controller = () => {
  return <div className="">c</div>;
};
