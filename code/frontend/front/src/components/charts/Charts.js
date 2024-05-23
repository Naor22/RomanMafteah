import { React, useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./Charts.css";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = ({ stats, status, setDefault }) => {
  const [maleData, setMaleData] = useState({});

  let statsData = [];
  let maleStatsData = [];
  let statsLabels;

  const statsObject = {
    total: Object.values(maleData)[0],
    precentage: Object.values(maleData)[1],
    filters: "נקבה",
  };

  useEffect(() => {
    axios
      .post("/api/stats", [{ name: "מין הסופר", value: "נקבה" }])
      .then((response) => {
        setMaleData(response.data);
        setDefault(Object.values(response.data)[2]);
      })
      .catch((error) => console.log(error));
  }, [status]);

  const createStats = () => {
    if (stats.filters !== undefined) {
      const newStats = stats.filters.filter((filter) => {
        return filter !== "";
      });
      statsLabels = newStats.toString();
    }
  };
  createStats();
  statsData = [
    { name: statsLabels, value: stats.precentage },
    { name: "שאר הרומנים", value: stats.total - stats.precentage },
  ];

  maleStatsData = [
    { name: "נקבה", value: statsObject.precentage },
    { name: "שאר הרומנים", value: statsObject.total - statsObject.precentage },
  ];

  const CHART_COLORS = {
    color1: "",
  };

  function generateColors(numColors) {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      colors.push(`rgb(${red}, ${green}, ${blue})`);
    }
    return colors;
  }

  const userData = {
    labels:
      stats.filters !== undefined
        ? statsData.map((item) => {
            return item.name;
          })
        : maleStatsData.map((item) => {
            return item.name;
          }),
    datasets: [
      {
        data:
          stats.filters !== undefined
            ? statsData.map((data) => {
                return data.value;
              })
            : maleStatsData.map((data) => {
                return data.value;
              }),
        backgroundColor: generateColors(2),
      },
    ],
  };

  return (
    <div className="Chart-Container">
      <Pie
        data={userData}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: "top" } },
        }}
      />
    </div>
  );
};

export default Charts;
