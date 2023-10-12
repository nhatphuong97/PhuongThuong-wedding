import React, { useState } from "react";
import PropTypes from "prop-types";

CountDownTime.propTypes = {
  listData: PropTypes.number,
  setTodoList: PropTypes.func,
};

function CountDownTime(props) {
    const {date,setDate} = useState()
    const {time,setTime} = useState()
  const { listData } = props;
  console.log("hih", listData);
  return (
    <div className="w-full text-center flex flex-col justify-center text-white py-3 text-lg">
      {/* {children} */}
      {listData}
      {props.children}
    </div>
  );
}

export default CountDownTime;
