import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import TracksController from "./song_controller";

LoveSongMain.propTypes = {};

function LoveSongMain({ tracks }) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];

  const audioRef = useRef(new Audio(audioSrc));

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);
  console.log(tracks);
  const ham = (loa) => {
    setIsPlaying(loa);
    console.log("loaaa", isPlaying);
  };
  return (
    <div>
      <TracksController isPlaying={isPlaying} onPlayPauseClick={setIsPlaying} />
    </div>
  );
}

export default LoveSongMain;
