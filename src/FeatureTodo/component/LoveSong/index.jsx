import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import TracksController from "./song_controller";
import song from "../../constant/song";
import imageFire from "../../../img/fire.jpg";

LoveSongMain.propTypes = {};

function LoveSongMain({ tracks }) {
  const [trackIndex, setTrackIndex] = useState(0);

  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { title, artist, color, image, audioSrc } = song[trackIndex];

  // Refs dùng useRef để không reRender lại app
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  //lấy đuration từ audioRef
  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -slider-thumb(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  useEffect(() => {
    console.log(trackProgress);
  }, [trackProgress]);

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }

    console.log("isPlaying", isPlaying);
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div className="div-song-under grid grid-flow-col  grid-cols-2">
      <div className="div-left bg-red-200 px-5 text-white text-end">
        <div className="flex flex-col h-full justify-center align-middle">
          <div className="song-title ">Every Song Tells a Story.</div>
          <div className="song-content">
            <p>Âm nhạc chạm đến được tâm hồn,</p>
            <p>Giúp bạn cảm thông được với những thứ mà không thể nói ra</p>
            <p>
              Và khi những giai điệu vang lên làm bạn nhớ đến một nửa của mình..
            </p>
          </div>
        </div>
      </div>
      <div className="bg-red-200 relative">
        <div className="div-right  flex flex-col relative -top-[70px] left-[20%]">
          <div className="w-[350px] h-auto -pt-[20%] ">
            <img src={imageFire} alt="" />
          </div>
          <div className="song_name mt-3 text-red-400 text-2xl font-playfair">
            {title}
          </div>
          <div className="song_artist text-red-400 text-base font-playfair">
            {artist}
          </div>

          <div className="flex  w-[350px] mt-2 ">
            <TracksController
              isPlaying={isPlaying}
              onPlayPauseClick={setIsPlaying}
              toNextSong={toPrevTrack}
              toPrevSong={toNextTrack}
            />
            <input
              type="range"
              value={trackProgress}
              step="1"
              min="0"
              max={duration ? duration : `${duration}`}
              className="w-full  bg-gray-200  cursor-pointer"
              onChange={(e) => onScrub(e.target.value)}
              onMouseUp={onScrubEnd}
              onKeyUp={onScrubEnd}
            />
            {/* <div
              class=" bg-white rounded-full  h-2.5 "
              style={{ width: duration ? duration : `${duration}` }}
            >
              <div
                class="bg-red-300 h-2.5 rounded-full"
                style={{ width: trackProgress }}
              ></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveSongMain;
