import React, { useState } from "react";
import Card from "../Card";

import Sidebar from "../Sidebar";

import "./styles.scss";
import ActivityData from "../data/data.json";

function Dashboard() {
  const [period, setPeriod] = useState("daily");

  return (
    <div className="main">
      <Sidebar period={period} setPeriod={setPeriod} />
      <div className="activities-grid">
        {ActivityData.map((data) => (
          <Card data={data} period={period} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
