import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
NotFound.propTypes = {};

function NotFound(props) {
  const navigate = useNavigate();
  const goback = () => navigate("/");
  return (
    <div>
      <div className="tw-dinhamroi-banoi">
        <h1 className="content"> ❤️ Đi nhầm rồi bạn ơi, hihi ❤️</h1>
        <button
          onClick={goback}
          className="w-max my-2  border border-spacing-3 text-center rounded-lg border-red-400 px-2"
        >
          Click me to go back
        </button>
      </div>
    </div>
  );
}

export default NotFound;
