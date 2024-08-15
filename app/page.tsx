import Spotify from "@/components/Spotify";

const page = () => {
  return (
    <div className="flex h-screen items-center bg-slate-300">
      <div className="w-full z-10">
        <Spotify />
      </div>
    </div>
  );
};

export default page;
