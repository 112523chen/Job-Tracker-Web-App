import React from "react";
import { application } from "../../components/model";
import Application from "../../components/Application/Application";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";

interface Props {
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
  setIsInAppView,
  fetchApplications,
}) => {
  const applications = useOutletContext<application[]>();

  return (
    <MainSectionBase>
      {applications.map((app) => (
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
