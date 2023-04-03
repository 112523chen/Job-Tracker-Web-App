import React from "react";
import { getBarChartData } from "../../helper/api/functions";
import { useState, useEffect } from "react";
import { barChartDataType } from "../../components/model";
import BarGraph from "../../components/Graphs/BarGraph/BarGraph";
import { AnalyticsSectionBase } from "./AnalyticsSection.style";

interface Props {}

const AnalyticsSection: React.FC<Props> = () => {
  const [barChartData, setBarChartData] = useState<barChartDataType[]>([]);

  const fetchBarChartData = async () => {
    const data = await getBarChartData();
    console.log(data);
    setBarChartData(data);
  };

  useEffect(() => {
    fetchBarChartData();
  }, []);

  console.log(barChartData);

  return (
    <AnalyticsSectionBase>
      <BarGraph barChartData={barChartData} />
    </AnalyticsSectionBase>
  );
};

export default AnalyticsSection;
