import React from "react";
import { application } from "../../components/model";
import Application from "../../components/Application/Application";
import { useOutletContext } from "react-router-dom";
import { RecentSectionBase } from "./RecentSection.style";

interface Props {
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  fetchApplications: (dataKind?: string) => Promise<void>;
}

const RecentSection: React.FC<Props> = ({
  setIsInAppView,
  fetchApplications,
}) => {
  const { applicationData, pathname } = useOutletContext<{
    applicationData: application[];
    pathname: string;
  }>();

  return (
    <RecentSectionBase>
      {applicationData.map((app) => (
        <Application
          applicationInfo={app}
          key={app.id}
          setIsInAppView={setIsInAppView}
          fetchApplications={fetchApplications}
        />
      ))}
    </RecentSectionBase>
  );
};

export default RecentSection;
