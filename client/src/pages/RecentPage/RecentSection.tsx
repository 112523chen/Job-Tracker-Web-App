import React from "react";
import { MainPageStates, application } from "../../components/model";
import Application from "../../components/Application/Application";
import { useOutletContext } from "react-router-dom";
import { RecentSectionBase } from "./RecentSection.style";

interface Props {
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  fetchApplications: (dataKind?: string) => Promise<void>;
  isInAppView: boolean;
}

const RecentSection: React.FC<Props> = ({
  setIsInAppView,
  fetchApplications,
  isInAppView,
}) => {
  const { applicationData, isInAddView } = useOutletContext<MainPageStates>();

  console.log("ADD", isInAddView);
  console.log("APP", isInAppView);

  return (
    <RecentSectionBase>
      {applicationData.map((app) => (
        <Application
          applicationInfo={app}
          key={app.id}
          setIsInAppView={setIsInAppView}
          fetchApplications={fetchApplications}
          isInAppView={isInAddView}
        />
      ))}
    </RecentSectionBase>
  );
};

export default RecentSection;
