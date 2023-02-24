import React, { useEffect } from "react";
import { application } from "../model";
import styled from "styled-components";
import { useState } from "react";
import ApplicationView from "../ApplicationView/ApplicationView";

interface Props {
  applicationInfo: application;
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
}

const ApplicationBase = styled.div`
  background-color: #e1e1e1;
  width: 70%;
  height: 189px;
  display: flex;
  border-radius: 20px;
  margin-bottom: 2.8125rem;
  &:hover {
    box-shadow: rgb(0 140 105) 5px 5px 0px;
  }
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

const Application: React.FC<Props> = ({ applicationInfo, setIsInAppView }) => {
  const [applicationState, setApplicationState] = useState<boolean>(false);

  useEffect(() => {}, [applicationState]);

  return (
    <ApplicationBase
      onClick={() => (applicationState ? null : setApplicationState(true))}
    >
      {applicationState ? (
        <ApplicationView
          applicationInfo={applicationInfo}
          setApplicationState={setApplicationState}
          applicationState={applicationState}
          setIsInAppView={setIsInAppView}
        />
      ) : null}
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
