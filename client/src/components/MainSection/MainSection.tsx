import React from "react";
import { application } from "../model";
import Application from "../Application/Application";
import styled from "styled-components";

interface Props {
  applicationData: application[];
}

const MainSectionBase = styled.div`
  margin-left: 15%;
  margin-right: auto;
  padding-left: 109px;
  padding-top: 54px;
`;

const MainSection: React.FC<Props> = ({ applicationData }) => {
  return (
    <MainSectionBase>
      {applicationData.map((app) => (
        <Application applicationInfo={app} key={app.id} />
      ))}
    </MainSectionBase>
  );
};

export default MainSection;
