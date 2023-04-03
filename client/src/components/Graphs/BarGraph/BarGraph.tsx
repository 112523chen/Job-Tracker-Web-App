import React from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { barChartDataType } from "../../model";
import { BarGraphBase } from "./BarGraph.style";

interface Props {
  barChartData: barChartDataType[];
}

const BarGraph: React.FC<Props> = ({ barChartData }) => {
  return (
    <BarGraphBase>
      <h3 className="chart-title">Distribution of Status</h3>
      <BarChart
        width={700}
        height={300}
        data={barChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="status"
          label={{ value: "Status", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          label={{
            value: "# of Roles",
            angle: -90,
            position: "insideCenter",
          }}
          tickCount={barChartData.length}
        />
        <Tooltip />
        {/* <Legend wrapperStyle={{ position: "relative" }} /> */}
        <Bar dataKey="count" fill="#618cf7" />
      </BarChart>
    </BarGraphBase>
  );
};

export default BarGraph;
