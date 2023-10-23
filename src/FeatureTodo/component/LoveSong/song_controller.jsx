import React from "react";
import { ReactComponent as Play } from "../../../icon/play.svg";
import { ReactComponent as Pause } from "../../../icon/pause.svg";
import { ReactComponent as Next } from "../../../icon/next.svg";
import { ReactComponent as Prev } from "../../../icon/prev.svg";
TracksController.propTypes = {};

function TracksController({
  isPlaying,
  onPlayPauseClick,
  toNextSong,
  toPrevSong,
}) {
  return (
    <div className="flex flex-row gap-10 mx-6 w-[100px] h-auto">
      <button>
        <Prev />
      </button>
      {!isPlaying ? (
        <button onClick={() => onPlayPauseClick(true)}>
          <Play />
        </button>
      ) : (
        <button onClick={() => onPlayPauseClick(false)}>
          <Pause />
        </button>
      )}
      <button>
        <Next />
      </button>
    </div>
  );
}

export default TracksController;
