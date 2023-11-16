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
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import song from "../../../constant/song";

// hiện hành createSlice cho phép chỉnh sửa trực tiếp state nhưng ý nghĩa vẫn như viet code mutation thao tasc truc tiep nhuwng hoat dong nhu inmutation
// Một điểm hay nữa là reducer có thể mutate data trực tiếp.
// Bản chất bên dưới họ sử dụng thư viện Immerjs

// Slice rất tiện nó trả về cho chúng ta 2 field là reducer : là reducer hiện hữu trong slice và thứ 2 là actions : giúp ta không cần tạo các ac tion nữa
export const songsSlice = createSlice({
  name: "songs",
  initialState: {
    status: "PAUSE_SONG",
    testSong: "chua co gi",
    isPlaying: false,
  },
  reducers: {
    playSong: (state, action) => {
      state.isPlaying = true;
      state.status = "PLAY_SONG";
    }, // type : 'songs/playSong'
    pauseSong: (state, action) => {
      console.log({ action: action.payload });
      state.isPlaying = false;
      state.status = "PAUSE_SONG";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createSong.pending, (state, action) => {
      console.log("ddang pending nha");
      console.log(state);
    });
    builder.addCase(createSong.fulfilled, (state, action) => {
      console.log("hoan thanh roi nha");
      console.log(JSON.stringify(state));
    });
  },
});

export const createSong = createAsyncThunk(
  "users/fetchByIdStatus",
  async (userID) => {
    // ở đây nhận 1 cái userID như ở ngoài truyền vào xong xử lý logic rồi mới gọi dispatch action hoặc không thì có thể xử lý state ở  extraReducers
    // 1 createAsyncThunk trả về 3 giá trị ==> pending, fulfilled, reject
    // const response = await userAPI.fetchById(userId)
    // return response.data
  },
  {
    condition: (userId, { getState, extra }) => {
      const { testSong } = getState();
      console.log(getState());
      // const fetchStatus = users.requests[userId]
      // if (fetchStatus === 'fulfilled' || fetchStatus === 'loading') {
      //   // Already fetched or in progress, don't need to re-fetch
      //   return false
      // }
    },
  }
);
