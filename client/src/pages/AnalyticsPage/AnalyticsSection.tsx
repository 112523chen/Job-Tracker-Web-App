import React from "react";
import {
  getBarChartData,
  getBarChartDataByTimeFrame,
  getBarChartTitleData,
} from "../../helper/api/functions";
import { useState, useEffect } from "react";
import { barChartDataType } from "../../components/model";
import BarGraph from "../../components/Graphs/BarGraph/BarGraph";
import { AnalyticsSectionBase } from "./AnalyticsSection.style";
import { TimeFrame } from "../../helper/models";
import TimeFrameSelector from "../../components/Selectors/TimeFrameSelector/TimeFrameSelector";

interface Props {}

const AnalyticsSection: React.FC<Props> = () => {
  const [barChartData, setBarChartData] = useState<barChartDataType[]>([]);
  const [titleBarChartData, setTitleBarChartData] = useState<
    barChartDataType[]
  >([]);
  const [currentTimeFrame, setCurrentTimeFrame] = useState<TimeFrame>("week");

  const fetchBarChartData = async () => {
    const roleData = await getBarChartDataByTimeFrame(currentTimeFrame);
    setBarChartData(roleData);
  };

  const fetchBarChartTitleData = async () => {
    const titleData = await getBarChartTitleData(3);
    setTitleBarChartData(titleData);
  };

  const updateCurrentTimeFrame = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newTimeFrame: TimeFrame = event.target.value as TimeFrame;
    setCurrentTimeFrame(newTimeFrame);
  };

  useEffect(() => {
    fetchBarChartTitleData();
  }, []);

  useEffect(() => {
    fetchBarChartData();
    fetchBarChartTitleData();
  }, [currentTimeFrame]);

  return (
    <AnalyticsSectionBase>
      <TimeFrameSelector updateCurrentTimeFrame={updateCurrentTimeFrame} />
      <BarGraph
        barChartData={barChartData}
        xAxisValueName={"status"}
        xAxisLabel={"Status"}
        yAxisLabel={"# of Roles"}
        title={"Distribution of Statuses"}
      />
      <BarGraph
        barChartData={titleBarChartData}
        xAxisValueName={"title"}
        xAxisLabel={"Titles"}
        yAxisLabel={"Count"}
        title={"Most Popular Roles Applied To"}
      />
    </AnalyticsSectionBase>
  );
};

export default AnalyticsSection;
