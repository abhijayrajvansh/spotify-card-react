"use client";

import { FaSpotify } from "react-icons/fa6";
import Image from "next/image";
import { useEffect, useState } from "react";

const Spotify = () => {
  useEffect(() => {
    console.log("useEffect Mounted!");
  }, []);

  const [song, setSong] = useState({
    bannerImgUri:
      "https://c.saavncdn.com/848/THE-INSIDE-OUTTAKES-English-2022-20220608043458-500x500.jpg",
    songName: "1985",
    artist: "Abhijay Rajvansh",
  });

  return (
    <>
      <div className="flex items-center justify-center mb-5">
        <div>
          <input
            type="text"
            className="border-2 border-black rounded text-black"
          />
          <button className="py-1 px-2 bg-green-500 rounded-lg text-white ml-2">
            Search Song
          </button>
        </div>
      </div>
      <div className="w-full flex rounded-xl justify-center">
        <div
          className={`relative cursor-pointer rounded-xl font-medium text-lg sm:mt-0 mt-5 sm:w-[650px] lg:max-w-[300px] mb-5 shadow-md transition dark:bg-black/40 bg-black/30 `}
        >
          <Image
            height={500}
            width={500}
            className="w-full h-full rounded-xl absolute object-cover object-center -z-10"
            src={song.bannerImgUri}
            alt="spotify-track-banner.png"
          />

          <div className="z-10 flex flex-col justify-between p-4 rounded-xl space-y-5 min-h-56">
            <div className="flex items-center justify-between">
              <FaSpotify
                className="text-green-500 border-blur-yellow rounded-full bg-black"
                size={37}
              />
              <Image
                unoptimized
                height={36}
                width={36}
                src="/images/audio-wave.gif"
                alt="audio-wave-animationa"
              />
            </div>
            <div className="space-y-5">
              <p className="font-light sm:text-sm  text-white text-md mt-1 drop-shadow-md">
                Recently played{" "}
                <span className="font-semibold sm:text-base">
                  {song.songName}
                </span>{" "}
                by{" "}
                <span className="font-semibold sm:text-base">
                  {song.artist}.
                </span>
              </p>
              <div className="min-h-[6px] rounded-full mx-1 bg-gradient-to-r from-[#25A7E9] to-pink-400"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spotify;
