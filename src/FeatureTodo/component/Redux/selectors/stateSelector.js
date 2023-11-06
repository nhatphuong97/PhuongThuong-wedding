//mục đích để gét selector ra cho dễ khỏi phải khởi tạo tại nhiều chỗ // cái này giúp mình lấy ra state ở lúc gọi useSelector

export const songSelector = (state) => state.songReducer.songs;
