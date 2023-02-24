import React from "react";
import { application } from "../model";
import Application from "../Application/Application";
import styled from "styled-components";

interface Props {
  applicationData: application[];
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainSectionBase = styled.div`
  margin-left: 15%;
  /* margin-right: auto; */
  padding-left: 109px;
  padding-top: 54px;
  width: 100%;
`;

const MainSection: React.FC<Props> = ({ applicationData, setIsInAppView }) => {
  return (
    <MainSectionBase>
      {applicationData.map((app) => (
        <Application
          applicationInfo={app}
          key={app.id}
          setIsInAppView={setIsInAppView}
        />
      ))}
    </MainSectionBase>
  );
};

export default MainSection;
