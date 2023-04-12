import React from "react";
import './Statistics.css'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip
} from "recharts";

const Statistics = () => {
  const data = [
    {
      subject: "Assignmnt-1",
      A: 60,
      fullMark: 60
    },
    {
      subject: "Assignmnt-2",
      A: 60,
      fullMark: 60
    },
    {
      subject: "Assignmnt-3",
      A: 60,
      fullMark: 60
    },
    {
      subject: "Assignmnt-4",
      A: 60,
      fullMark: 60
    },
    {
      subject: "Assignmnt-5",
      A: 60,
      fullMark: 60
    },
    {
      subject: "Assignmnt-6",
      A: 60,
      B: 60,
      fullMark: 60
    },
    {
      subject: "Assignmnt-7",
      A: 60,
      fullMark: 60
    },
    {
      subject: "Assignmnt-8",
      A: 56,
      fullMark: 60
    }
  ];
  return (
    <div className="Statistics">
      <div className="Job-details-banner">
        <h1>Statistics</h1>
      </div>
      <h3>Marks of my previous Assignments:</h3>
      <div className="chart1">
      <RadarChart
      cx={500}
      cy={600}
      outerRadius={300}
      width={1000}
      height={1000}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Tooltip/>
      <Radar
        name="Mubasshir"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
      </div>
    </div>
  );
};

export default Statistics;
