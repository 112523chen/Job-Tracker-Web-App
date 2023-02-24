import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { application } from "../model";

interface Props {
  applicationData: application[];
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  isInAddView: boolean;
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnalyticsView: React.FC<Props> = ({ setIsInAddView, isInAddView }) => {
  return (
    <div>
      <Sidebar setIsInAddView={setIsInAddView} isInAddView={isInAddView} />
    </div>
  );
};

export default AnalyticsView;
