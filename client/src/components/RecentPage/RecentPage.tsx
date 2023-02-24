import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { application } from "../model";
import RecentSection from "../RecentSection/RecentSection";

interface Props {
  applicationData: application[];
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  isInAddView: boolean;
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  fetchApplications: () => Promise<void>;
}

const RecentPage: React.FC<Props> = ({
  applicationData,
  setIsInAppView,
  setIsInAddView,
  isInAddView,
  fetchApplications,
}) => {
  return (
    <div>
      <Sidebar setIsInAddView={setIsInAddView} isInAddView={isInAddView} />
      <RecentSection
        applicationData={applicationData}
        setIsInAppView={setIsInAppView}
        fetchApplications={fetchApplications}
      />
    </div>
  );
};

export default RecentPage;
