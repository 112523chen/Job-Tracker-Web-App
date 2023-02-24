import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { application } from "../model";
import styled from "styled-components";
import Application from "../Application/Application";

interface Props {
  applicationData: application[];
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  fetchApplications: () => Promise<void>;
}

const RecentSectionBase = styled.div`
  margin-left: 15%;
  padding-left: 109px;
  padding-top: 54px;
  width: 100%;
`;

const RecentSection: React.FC<Props> = ({
  applicationData,
  setIsInAppView,
  fetchApplications,
}) => {
  return (
    <div>
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
    </div>
  );
};

export default RecentSection;
