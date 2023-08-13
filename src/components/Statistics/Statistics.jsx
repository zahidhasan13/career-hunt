import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

const data = [
    { name: "Page A", uv: 400, pv: 2300, amt: 2400 },
    { name: "Page B", uv: 800, pv: 2100, amt: 2500 },
    { name: "Page C", uv: 500, pv: 2000, amt: 2600 },
    { name: "Page D", uv: 430, pv: 2600, amt: 2200 },
    { name: "Page E", uv: 480, pv: 2400, amt: 2000 }
];

const Statistics = () => {
  return (
    <div>
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default Statistics;
