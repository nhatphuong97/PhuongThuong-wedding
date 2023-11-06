export const playSong = () => {
  return {
    type: "PLAY_SONG",
  };
};

export const pauseSong = () => {
  return {
    type: "PAUSE_SONG",
  };
};

export const nextSong = () => {
  return {
    type: "NEXT_SONG",
    payload: 1, // next 1 bài
  };
};

export const prevSong = () => {
  return {
    type: "PREV_SONG",
    payload: 1, // pre 1 bài
  };
};

export const goToSong = (index) => {
  return {
    type: "GO_TO_SONG",
    payload: 1,
    index: index, // pre 1 bài
  };
};
