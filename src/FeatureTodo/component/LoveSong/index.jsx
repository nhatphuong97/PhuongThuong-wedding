import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import TracksController from "./song_controller";
import song from "../../constant/song";

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
    <div>
      {title}
      {audioSrc}
      {artist}
      <TracksController
        isPlaying={isPlaying}
        onPlayPauseClick={setIsPlaying}
        toNextSong={toPrevTrack}
        toPrevSong={toNextTrack}
      />
    </div>
  );
}

export default LoveSongMain;
