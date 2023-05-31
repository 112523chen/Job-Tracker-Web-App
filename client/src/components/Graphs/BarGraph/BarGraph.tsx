import React from "react";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { barChartDataType } from "../../model";
import { BarGraphBase } from "./BarGraph.style";

interface Props {
  barChartData: barChartDataType[];
  xAxisValueName: string;
  xAxisLabel: string;
  yAxisLabel: string;
  title: string;
}

const BarGraph: React.FC<Props> = ({
  barChartData,
  xAxisValueName,
  xAxisLabel,
  yAxisLabel,
  title,
}) => {
  console.log(barChartData);
  return (
    <BarGraphBase>
      <h3 className="chart-title">{title}</h3>
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
          height={35}
          dataKey={xAxisValueName}
          label={{ value: xAxisLabel, position: "insideBottom", offset: -5 }}
        />
        <YAxis
          width={90}
          label={{
            value: yAxisLabel,
            angle: -90,
            position: "insideCenter",
          }}
          domain={[0, barChartData.length]}
        />
        <Tooltip />
        {/* <Legend wrapperStyle={{ position: "relative" }} /> */}
        <Bar dataKey="count" fill="#618cf7" />
      </BarChart>
    </BarGraphBase>
  );
};

export default BarGraph;
