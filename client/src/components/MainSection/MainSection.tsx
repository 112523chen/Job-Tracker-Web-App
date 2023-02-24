import React from "react";
import { application } from "../model";
import Application from "../Application/Application";
import styled from "styled-components";

interface Props {
  applicationData: application[];
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  fetchApplications: () => Promise<void>;
}

const MainSectionBase = styled.div`
  margin-left: 15%;
  padding-left: 109px;
  padding-top: 54px;
  width: 100%;
`;

const MainSection: React.FC<Props> = ({
  applicationData,
  setIsInAppView,
  fetchApplications,
}) => {
  return (
    <MainSectionBase>
      {applicationData.map((app) => (
        <Application
          applicationInfo={app}
          key={app.id}
          setIsInAppView={setIsInAppView}
          fetchApplications={fetchApplications}
        />
      ))}
    </MainSectionBase>
  );
};

export default MainSection;
