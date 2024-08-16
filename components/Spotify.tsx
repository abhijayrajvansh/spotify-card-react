"use client";

import { FaSpotify } from "react-icons/fa6";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios';

const Spotify = () => {

  const [searchSong, setSearchSong] = useState('big dawgs'); // hail big stepper
  const API_URL = process.env.NEXT_PUBLIC_MUSIC_CLIENT_API as string;

  const [song, setSong] = useState({
    bannerImgUri: '',
    songName: '',
    artist: '',
  });

  const fetchSongData = async () => {
    const res = await axios.get(API_URL + searchSong)
    const title = res.data.data.results[0].name;
    const image = res.data.data.results[0].image[2].url;
    const singer = res.data.data.results[0].singers;

    setSong({
      songName: title,
      artist: singer,
      bannerImgUri: image
    })
  }

  useEffect(() => {
    fetchSongData()
  }, [])

  const handleSongNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchSong(event.target.value)
  }

  return (
    <>
      <div className="flex items-center justify-center mb-5">
        <div className="flex flex-col gap-3 w-[300px]">
          <input 
            value={searchSong}
            onChange={handleSongNameChange}
            name="songName"
            type="text"
            placeholder="enter song name..."
            className="border-2 border-black rounded text-black py-1 px-2"
          />
          <button onClick={fetchSongData} className="py-1 w-full px-2 hover:bg-green-600 bg-green-500 rounded-lg text-white">
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
            alt="spotify-track-banner.png" priority
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
