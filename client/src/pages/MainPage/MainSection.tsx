import React from "react";
import { MainPageStates, application } from "../../components/model";
import Application from "../../components/Application/Application";
import { useOutletContext } from "react-router-dom";
import AddButton from "../../components/Buttons/AddButton/AddButton";
import { MainSectionBase } from "./MainPage.style";

interface Props {
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  fetchApplications: () => Promise<void>;
  isInAppView: boolean;
}

const MainSection: React.FC<Props> = ({
  setIsInAppView,
  fetchApplications,
  isInAppView,
}) => {
  const { applicationData, isInAddView, setIsInAddView } =
    useOutletContext<MainPageStates>();

  return (
    <MainSectionBase>
      <AddButton
        isInAddView={isInAddView}
        setIsInAddView={setIsInAddView}
        isInAppView={isInAppView}
      />
      {applicationData.map((app) => (
        <Application
          applicationInfo={app}
          key={app.id}
          setIsInAppView={setIsInAppView}
          fetchApplications={fetchApplications}
          isInAppView={isInAppView}
        />
      ))}
    </MainSectionBase>
  );
};

export default MainSection;
