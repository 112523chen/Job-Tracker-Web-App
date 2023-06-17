import React from "react";
import { TimeFrameSelectorBase } from "./TimeFrameSelector.style";

interface Props {
  updateCurrentTimeFrame: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TimeFrameSelector: React.FC<Props> = ({ updateCurrentTimeFrame }) => {
  return (
    <TimeFrameSelectorBase>
      <h2>Applications over the </h2>
      <select onChange={updateCurrentTimeFrame}>
        <option value={"week"}>Last Week</option>
        <option value={"month"}>Last Month</option>
        <option value={"month3"}>Last 3 Month</option>
        <option value={"month6"}>Last 6 Month</option>
      </select>
    </TimeFrameSelectorBase>
  );
};

export default TimeFrameSelector;
