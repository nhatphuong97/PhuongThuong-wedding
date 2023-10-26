import React from "react";
import { ReactComponent as Play } from "../../../icon/play.svg";
import { ReactComponent as Pause } from "../../../icon/pause.svg";
import { ReactComponent as Next } from "../../../icon/next.svg";
import { ReactComponent as Prev } from "../../../icon/prev.svg";
import "./style.scss";
TracksController.propTypes = {};

function TracksController({
  isPlaying,
  onPlayPauseClick,
  toNextSong,
  toPrevSong,
}) {
  return (
    <div className="flex flex-row gap-3 mr-2 w-max h-max justify-center ">
      <span className="icon_music flex items-center " onClick={toPrevSong}>
        <Prev />
      </span>
      {!isPlaying ? (
        <div onClick={() => onPlayPauseClick(true)}>
          <Play />
        </div>
      ) : (
        <div onClick={() => onPlayPauseClick(false)}>
          <Pause />
        </div>
      )}
      <span className="icon_music  flex items-center " onClick={toNextSong}>
        <Next />
      </span>
    </div>
  );
}

export default TracksController;
