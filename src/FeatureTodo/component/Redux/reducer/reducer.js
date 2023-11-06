// Vì sẽ có nhiều reducer cần quản lý nên phải thêm 1 reducer tổng trả ra 1 combineReducers để gom all

import { combineReducers } from "redux";
import songReducer from "./music_reducer";

export const allReducers = combineReducers({
  songReducer,
});
