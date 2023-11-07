//mục đích để gét selector ra cho dễ khỏi phải khởi tạo tại nhiều chỗ // cái này giúp mình lấy ra state ở lúc gọi useSelector
/// chỗ này cũng có thể dùng để custom dữ liệu

import { createSelector } from "@reduxjs/toolkit/dist";
export const songSelector = (state) => state.songs;

// chỗ này demo nhẹ vì chưa có chức năng gì cần custom // phần trước hàm có bao nhiêu selector tham gia vào để xử lý thì điền vào còn phần hàm tham số truyền vào là nhận lại các selector
export const calculateSelector = createSelector(songSelector, (song) => {
  return song;
});
