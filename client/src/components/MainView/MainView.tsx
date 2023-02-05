import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import styled from "styled-components";
import MainSection from "../MainSection/MainSection";
import { application } from "../model";

interface Props {
  applicationData: application[];
}

const MainViewBase = styled.div`
  display: flex;
`;

const MainView: React.FC<Props> = ({ applicationData }) => {
  return (
    <MainViewBase>
      <Sidebar />
      <MainSection applicationData={applicationData} />
    </MainViewBase>
  );
};

export default MainView;
