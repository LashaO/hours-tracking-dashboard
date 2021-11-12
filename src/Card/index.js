import React from "react";
import "./styles.scss";

function Card({ data, period }) {
  return (
    <div className={`card ${data.title}`}>
      <div className="card-content">
        <div className="card-header">
          <div className="card-title">
            <p className="card-title-text">{data.title}</p>
          </div>
          <div className="card-menu">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div className="card-body">
          <p className="hours">{data.timeframes[period].current}hrs</p>
          <p className="last-week">
            Last Week - {data.timeframes[period].current}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
