import React from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { application } from "../../components/model";
import Sidebar from "../../components/Sidebar/Sidebar";

interface Props {
  applicationData: application[];
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  isInAddView: boolean;
}

interface State {
  isInAddView: boolean;
}

const MainPageBase = styled.div<State>`
  display: flex;
  ${(props) => (props.isInAddView === false ? null : "")}
`;

const MainPage: React.FC<Props> = ({
  applicationData,
  setIsInAddView,
  isInAddView,
}) => {
  return (
    <MainPageBase isInAddView={isInAddView}>
      <Sidebar setIsInAddView={setIsInAddView} isInAddView={isInAddView} />
      <Outlet context={applicationData} />
    </MainPageBase>
  );
};

export default MainPage;
