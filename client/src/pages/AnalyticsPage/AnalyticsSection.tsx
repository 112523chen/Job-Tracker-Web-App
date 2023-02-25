import React from "react";
import { getBarChartData } from "../../helper/api/functions";
import { useState, useEffect } from "react";

interface Props {}

const AnalyticsSection: React.FC<Props> = () => {
  const [barChartData, setBarChartData] = useState({});

  const fetchBarChartData = async () => {
    const data = await getBarChartData();
    setBarChartData(data);
  };

  useEffect(() => {
    fetchBarChartData();
  }, []);

  console.log(barChartData);

  return <div></div>;
};

export default AnalyticsSection;
