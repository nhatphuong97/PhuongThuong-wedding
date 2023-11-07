// export const initValue = {
//   songs: {
//     status: "PAUSE_SONG",
//     isPlaying: false,
//   },
// };

// const SongReducer = (state = initValue, action) => {
//   switch (action.type) {
//     case "PAUSE_SONG":
//       return {
//         ...state,
//         songs: {
//           ...state.songs,
//           status: "PAUSE_SONG",
//           isPlaying: false,
//         },
//       };
//     case "PLAY_SONG":
//       return {
//         ...state,
//         songs: {
//           ...state.songs,
//           status: "PLAY_SONG",
//           isPlaying: true,
//         },
//       };
//     case "NEXT_SONG":
//       return {
//         ...state,
//         songs: {
//           ...state.songs,
//           status: "NEXT_SONG",
//         },
//       };
//     case "PREV_SONG":
//       return {
//         ...state,
//         songs: {
//           ...state.songs,
//           status: "PREV_SONG",
//         },
//       };
//     default:
//       return state;
//   }
// };

// export default SongReducer;

//slice là các reducerr nhỏ là các mảnh cắt
import { createSlice } from "@reduxjs/toolkit";

// hiện hành createSlice cho phép chỉnh sửa trực tiếp state nhưng ý nghĩa vẫn như viet code mutation thao tasc truc tiep nhuwng hoat dong nhu inmutation
// Một điểm hay nữa là reducer có thể mutate data trực tiếp.
// Bản chất bên dưới họ sử dụng thư viện Immerjs

// Slice rất tiện nó trả về cho chúng ta 2 field là reducer : là reducer hiện hữu trong slice và thứ 2 là actions : giúp ta không cần tạo các ac tion nữa
export const songsSlice = createSlice({
  name: "songs",
  initialState: {
    status: "PAUSE_SONG",
    isPlaying: false,
  },
  reducers: {
    playSong: (state, action) => {
      state.isPlaying = true;
      state.status = "PLAY_SONG";
    }, // type : 'songs/playSong'
    pauseSong: (state, action) => {
      state.isPlaying = false;
      state.status = "PAUSE_SONG";
    },
  },
});
