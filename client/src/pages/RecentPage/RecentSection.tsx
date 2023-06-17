import React from "react";
import {
  MainPageStates,
  application,
  applicationStatusFilterType,
} from "../../components/model";
import Application from "../../components/Application/Application";
import { useOutletContext } from "react-router-dom";
import {
  RecentSectionBase,
  RecentSectionContent,
  RecentSectionTitle,
} from "./RecentSection.style";
import {
  ApplicationContent,
  ApplicationFilter,
} from "../MainPage/MainPage.style";
import ApplicationStatusSelector from "../../components/Selectors/ApplicationStatusSelector/ApplicationStatusSelector";

interface Props {
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  fetchApplications: (dataKind?: string) => Promise<void>;
  isInAppView: boolean;
}

const RecentSection: React.FC<Props> = ({
  setIsInAppView,
  fetchApplications,
}) => {
  const { applicationData, isInAddView, updateCurrentStatusFilter } =
    useOutletContext<MainPageStates>();

  return (
    <RecentSectionBase>
      <RecentSectionTitle>Recent Modified Applications</RecentSectionTitle>
      <RecentSectionContent>
        <ApplicationContent>
          {applicationData.map((app) => (
            <Application
              applicationInfo={app}
              key={app.id}
              setIsInAppView={setIsInAppView}
              fetchApplications={fetchApplications}
              isInAppView={isInAddView}
            />
          ))}
        </ApplicationContent>
        <ApplicationFilter>
          <ApplicationStatusSelector
            updateCurrentStatusFilter={updateCurrentStatusFilter}
          />
        </ApplicationFilter>
      </RecentSectionContent>
    </RecentSectionBase>
  );
};

export default RecentSection;
