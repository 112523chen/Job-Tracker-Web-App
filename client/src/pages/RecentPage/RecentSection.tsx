import React from "react";
import { application } from "../../components/model";
import styled from "styled-components";
import Application from "../../components/Application/Application";
import { useOutletContext } from "react-router-dom";

interface Props {
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
  setIsInAppView,
  fetchApplications,
}) => {
  const applicationData = useOutletContext<application[]>();

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
