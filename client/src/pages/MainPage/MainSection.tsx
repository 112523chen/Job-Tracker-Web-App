import React from "react";
import { MainPageStates } from "../../components/model";
import Application from "../../components/Application/Application";
import { useOutletContext } from "react-router-dom";
import AddButton from "../../components/Buttons/AddButton/AddButton";
import {
  ApplicationContent,
  ApplicationFilter,
  MainSectionBase,
  MainSectionContent,
} from "./MainPage.style";
import ApplicationStatusSelector from "../../components/Selectors/ApplicationStatusSelector/ApplicationStatusSelector";
import { updateApplication } from "../../helper/api/functions";

interface Props {
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  fetchApplications: () => Promise<void>;
  isInAppView: boolean;
}

const MainSection: React.FC<Props> = ({
  setIsInAppView,
  fetchApplications,
  isInAppView,
  // updateCurrentStatusFilter,
}) => {
  const {
    applicationData,
    isInAddView,
    setIsInAddView,
    updateCurrentStatusFilter,
  } = useOutletContext<MainPageStates>();

  return (
    <MainSectionBase>
      <AddButton
        isInAddView={isInAddView}
        setIsInAddView={setIsInAddView}
        isInAppView={isInAppView}
      />

      <MainSectionContent>
        <ApplicationContent>
          {applicationData.map((app) => (
            <Application
              applicationInfo={app}
              key={app.id}
              setIsInAppView={setIsInAppView}
              fetchApplications={fetchApplications}
              isInAppView={isInAppView}
            />
          ))}
        </ApplicationContent>
        <ApplicationFilter>
          <ApplicationStatusSelector
            updateCurrentStatusFilter={updateCurrentStatusFilter}
          />
        </ApplicationFilter>
      </MainSectionContent>
    </MainSectionBase>
  );
};

export default MainSection;
