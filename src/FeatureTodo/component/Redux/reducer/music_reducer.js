export const initValue = {
  songs: {
    status: "PAUSE_SONG",
    isPlaying: false,
  },
};

const SongReducer = (state = initValue, action) => {
  switch (action.type) {
    case "PAUSE_SONG":
      return {
        ...state,
        songs: {
          ...state.songs,
          status: "PAUSE_SONG",
          isPlaying: false,
        },
      };
    case "PLAY_SONG":
      return {
        ...state,
        songs: {
          ...state.songs,
          status: "PLAY_SONG",
          isPlaying: true,
        },
      };
    case "NEXT_SONG":
      return {
        ...state,
        songs: {
          ...state.songs,
          status: "NEXT_SONG",
        },
      };
    case "PREV_SONG":
      return {
        ...state,
        songs: {
          ...state.songs,
          status: "PREV_SONG",
        },
      };
    default:
      return state;
  }
};

export default SongReducer;
