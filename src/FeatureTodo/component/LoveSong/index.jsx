import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import TracksController from "./song_controller";
import song from "../../constant/song";
import imageFire from "../../../img/fire.jpg";
import { progress } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { songSelector } from "../Redux/selectors/stateSelector";
import { playSong, pauseSong } from "../Redux/action/music_action";

LoveSongMain.propTypes = {};

function LoveSongMain({ tracks }) {
  const songState = useSelector(songSelector);
  const dispatchSong = useDispatch();
  console.log({ a: songState });

  const [trackIndex, setTrackIndex] = useState(0);

  const [trackProgress, setTrackProgress] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);
  const { title, artist, color, image, audioSrc } = song[trackIndex];

  // Refs dùng useRef để không reRender lại app
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  //lấy đuration từ audioRef
  const { duration } = audioRef.current;
  const durationMinute = useRef("00 : 00");
  const progressMinute = useRef("00 : 00");

  const calProgress = () => {
    const secondProgress = ("0" + Math.floor(trackProgress % 60)).slice(-2);
    const minuteProgress = ("0" + Math.floor(trackProgress / 60)).slice(-2);
    progressMinute.current = `${minuteProgress} : ${secondProgress}`;
  };
  const calDuration = () => {
    const secondDuration = ("0" + Math.floor(duration % 60)).slice(-2);
    const minuteDuration = ("0" + Math.floor(duration / 60)).slice(-2);
    if (!isNaN(duration)) {
      durationMinute.current = `${minuteDuration} : ${secondDuration}`;
    }
  };

  // const currentPercentage = duration
  //   ? `${(trackProgress / duration) * 100}%`
  //   : "0%";
  // const trackStyling = `
  //   -slider-thumb(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  // `;

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

  const setIsPlaying = (value) => {
    console.log(value);

    if (value) {
      dispatchSong(playSong());
    } else {
      dispatchSong(pauseSong());
    }
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!songState.isPlaying) {
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
    if (songState.isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
    if (durationMinute.current == "00 : 00") {
      calDuration();
    }
  }, [songState.isPlaying]);

  // useEffect(() => {
  //   calDuration();
  // }, []);

  useEffect(() => {
    calProgress();
  }, [duration, trackProgress]);

  useEffect(() => {
    calDuration();
  }, [audioSrc]);

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
        <div className="div-right absolute flex flex-col  -top-[70px] left-[20%]">
          <div className="w-[350px] h-auto -pt-[20%] ">
            <img src={imageFire} alt="" />
          </div>
          <div className="song_name mt-3 text-red-400 text-2xl font-playfair">
            {title}
          </div>
          <div className="song_artist text-red-400 text-sm font-playfair">
            {artist}
          </div>

          <div className="flex w-[350px] h-auto flex-row mt-2 items-center ">
            <div className="basis-[10%]">
              <TracksController
                isPlaying={songState.isPlaying}
                onPlayPauseClick={setIsPlaying}
                toNextSong={toPrevTrack}
                toPrevSong={toNextTrack}
              />
            </div>
            <div className="basis-[55%] flex flex-col justify-center pr-1">
              <input
                type="range"
                value={trackProgress}
                step="1"
                min="0"
                max={duration ? duration : `${duration}`}
                className="w-full basis-6/10 bg-gray-600  cursor-pointer"
                onChange={(e) => onScrub(e.target.value)}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
              />
            </div>
            {/* <h1 className=" basis-[15%]  font-playfair text-center bg-slate-400 justify-center align-middle text-ellipsis">
              {progressMinute.current}
            </h1> */}
            <h1 className="basis-[12%] text-red-400 w-max font-vollkorn text-sm text-center ">
              {progressMinute.current}
            </h1>
            <h1 className="basis-[15%] text-red-400 w-max font-vollkorn text-sm text-center ">
              / {durationMinute.current}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveSongMain;
