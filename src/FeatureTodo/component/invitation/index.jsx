import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
Invitation.propTypes = {};

function Invitation(props) {
  return (
    <div>
      <div className="invitation-main">
        <div className="invi-cake"></div>
        <div className="invi-content"></div>
      </div>
    </div>
  );
}

export default Invitation;
