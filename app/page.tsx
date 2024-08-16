import Spotify from "@/components/Spotify";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex h-screen items-center bg-slate-200">
      <div className="w-full z-10 drop-shadow-md">
        <Spotify /> 
        <div className="flex justify-center">
          <div className="py-1 px-2 rounded bg-green-200/80 flex justify-center text-white w-fit">
            <p className="text-green-800">
              <Link target="_blank" rel="noopener noreferrer" href={'https://abhijayrajvansh.com/'}> © 2024 Developed by Abhijay Rajvansh.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
