import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='dashboard__graph'>
        <h2>Graph</h2>
      </div>
      <div className='dashboard__metrics'>
        <div className='dashboard__metricsRow'>
          <div className='dashboard__metricsItem'>
            <p>Number of clients</p>
            <p>
              <span className='dashboard__metricsItemNumber'>12</span>{" "}
              <span className='dashboard__metricsItemPercentage'>+13%</span>{" "}
              from last month
            </p>
          </div>
          <div className='dashboard__metricsItem'>
            <p>2</p>
          </div>
          <div className='dashboard__metricsItem'>
            <p>3</p>
          </div>
        </div>
        <div className='dashboard__metricsRow'>
          <div className='dashboard__metricsItem'>
            <p>1</p>
          </div>
          <div className='dashboard__metricsItem'>
            <p>2</p>
          </div>
          <div className='dashboard__metricsItem'>
            <p>3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
