import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { application, barChartDataType, applicationStatusType } from "../model";
import { getBarChartData } from "../../helper/api/functions";

interface Props {
  applicationData: application[];
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  isInAddView: boolean;
}

const AnalyticsPage: React.FC<Props> = ({
  setIsInAddView,
  isInAddView,
  applicationData,
}) => {
  return (
    <div>
      <Sidebar setIsInAddView={setIsInAddView} isInAddView={isInAddView} />
    </div>
  );
};

export default AnalyticsPage;
