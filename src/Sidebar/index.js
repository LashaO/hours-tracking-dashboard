import React from "react";
import "./styles.scss";
import Avatar from "../assets/image-jeremy.png";

function index({ period, setPeriod }) {
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <div className="avatar">
          <img src={Avatar} alt="User Avatar" />
        </div>
        <div className="name">
          <p className="user-prefix">Report for</p>
          <p className="user-name"> Jeremy Robson</p>
        </div>
      </div>
      <div className="sidebar-period">
        <ul>
          <li
            className={`${period == "daily" ? "active" : ""}`}
            onClick={() => setPeriod("daily")}
          >
            Daily
          </li>
          <li
            className={`${period == "weekly" ? "active" : ""}`}
            onClick={() => setPeriod("weekly")}
          >
            Weekly
          </li>
          <li
            className={`${period == "monthly" ? "active" : ""}`}
            onClick={() => setPeriod("monthly")}
          >
            Monthly
          </li>
        </ul>
      </div>
    </div>
  );
}

export default index;
