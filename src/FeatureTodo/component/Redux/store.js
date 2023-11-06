//store là một kho chung chứa all reducer xử lý trong reduce
// ở đây allReduce là 1 mảng combine chứa cái reduce


import { createStore } from "redux";
import { allReducers } from "./reducer/reducer"; // tamj comment vif dax dung  configureStore co the config nhieu reducer roi
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import SongReducer from "./reducer/music_reducer";
const composedEnhancers = composeWithDevTools();

const storeRedux = createStore(allReducers, composedEnhancers);

export default storeRedux;
