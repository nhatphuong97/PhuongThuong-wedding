import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { color, motion, Variants } from "framer-motion";

CountDownTime.propTypes = {
  listData: PropTypes.number,
  setTodoList: PropTypes.func,
};

function CountDownTime(props) {
  const [expiryTime, setExpiryTime] = useState("6 jan 2024 12:00:00");
  const [countDownDayTime, setCountDownDateTime] = useState({
    countdownDays: "0",
    countdownHours: "0",
    countdownMinutes: "0",
    countdownSeconds: "0",
  });

  useEffect(() => {
    countDownTime();
  }, []);

  const countDownTime = () => {
    const timeInterval = setInterval(() => {
      const expiryDateTime = new Date(expiryTime).getTime();
      const now = new Date().getTime();

      const remainingDayTime = expiryDateTime - now;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };
      setCountDownDateTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);

    // now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
    // console.log("countdownDateTime", runningCountdownTime);
    // console.log("now", now);
    // console.log("currentHours", currentHours);
  };

  return (
    <div className="w-full text-center flex flex-row font-dancing justify-center text-white py-3">
      {/* {children} */}
      {/* {listData}
      {props.children} */}
      {/* {countDownDayTime.countdownDays} ngày {countDownDayTime.countdownHours}{" "}
      giờ {countDownDayTime.countdownMinutes} phút{" "}
      {countDownDayTime.countdownSeconds} giây */}
      <div className="tw-count-down-time-block-item">
        <div className="tw-number-item">{countDownDayTime.countdownDays}</div>
        <div className="tw-text-item">Ngày</div>
      </div>
      <div className="tw-count-down-time-block-item">
        <div className="tw-number-item">{countDownDayTime.countdownHours}</div>
        <div className="tw-text-item">Giờ</div>
      </div>
      <div className="tw-count-down-time-block-item">
        <div className="tw-number-item">
          {countDownDayTime.countdownMinutes}
        </div>
        <div className="tw-text-item">Phút</div>
      </div>
      <div className="tw-count-down-time-block-item">
        <motion.div className="tw-number-item">
          {countDownDayTime.countdownSeconds}
        </motion.div>
        <div className="tw-text-item">Giây</div>
      </div>
    </div>
  );
}

export default CountDownTime;
