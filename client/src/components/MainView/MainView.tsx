import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
import MainSection from "../MainSection/MainSection";
import { application } from "../model";

interface Props {
  applicationData: application[];
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  isInAddView: boolean;
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  fetchApplications: () => Promise<void>;
}

interface State {
  isInAddView: boolean;
}

const MainViewBase = styled.div<State>`
  display: flex;
  ${(props) => (props.isInAddView === false ? null : "")}
`;

const MainView: React.FC<Props> = ({
  applicationData,
  setIsInAddView,
  isInAddView,
  setIsInAppView,
  fetchApplications,
}) => {
  return (
    <MainViewBase isInAddView={isInAddView}>
      <Sidebar setIsInAddView={setIsInAddView} isInAddView={isInAddView} />
      <MainSection
        applicationData={applicationData}
        setIsInAppView={setIsInAppView}
        fetchApplications={fetchApplications}
      />
    </MainViewBase>
  );
};

export default MainView;
