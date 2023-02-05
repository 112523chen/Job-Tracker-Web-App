import React from "react";
import { application } from "../model";
import styled from "styled-components";

interface Props {
  applicationInfo: application;
}

const ApplicationBase = styled.div`
  background-color: #e1e1e1;
  width: 808px;
  height: 189px;
  display: flex;
  border-radius: 20px;
  margin-bottom: 2.8125rem;
`;

const ApplicationSide = styled.div`
  background-color: #aeaeae;
  width: 2rem;
  border-radius: 20px 0 0 20px;
`;

const ApplicationMain = styled.div`
  margin-left: 1.5rem;
`;

const ApplicationRole = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 0.8rem;
`;

const ApplicationCompany = styled.p`
  font-weight: 700;
  font-size: 24px;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
`;

const ApplicationDescription = styled.div`
  font-weight: 500;
  font-size: 16px;
  width: 40.5rem;
`;

const Application: React.FC<Props> = ({ applicationInfo }) => {
  return (
    <ApplicationBase>
      <ApplicationSide></ApplicationSide>
      <ApplicationMain>
        <ApplicationRole>{applicationInfo.title}</ApplicationRole>
        <ApplicationCompany>{applicationInfo.company}</ApplicationCompany>
        <ApplicationDescription>
          {applicationInfo.description}
        </ApplicationDescription>
      </ApplicationMain>
    </ApplicationBase>
  );
};

export default Application;
