import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Calendar from "../Calendar";
Invitation.propTypes = {};

function Invitation(props) {
  return (
    <div>
      <div className="invitation-main">
        {/* <div className="invi-cake"></div> */}
        <div className="invi-content">
          <div className="bg h-full w-2/4"></div>
          <div className=" h-full w-1/4 flex">
            <Calendar />
          </div>
          <div
            className="bg-cake h-[500px] w-[400px] bg-cover bg-no-repeat absolute
           -bottom-24 ml-auto mr-auto left-[25%] right-0 py-5  rounded-t-full text-center font-medium text-2xl
            text-red-400 font-pacifico"
          >
            Invite You To Celebrate Our Wedding
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invitation;
