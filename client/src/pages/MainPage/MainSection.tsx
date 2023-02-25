import React from "react";
import { application } from "../../components/model";
import Application from "../../components/Application/Application";
import { useOutletContext } from "react-router-dom";
import AddButton from "../../components/Buttons/AddButton/AddButton";
import { MainSectionBase } from "./MainPage.style";

interface Props {
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  fetchApplications: () => Promise<void>;
}

const MainSection: React.FC<Props> = ({
  setIsInAppView,
  fetchApplications,
}) => {
  const { applicationData, isInAddView, setIsInAddView } = useOutletContext<{
    applicationData: application[];
    pathname: string;
    isInAddView: boolean;
    setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  }>();

  return (
    <MainSectionBase>
      <AddButton isInAddView={isInAddView} setIsInAddView={setIsInAddView} />
      {applicationData.map((app) => (
        <Application
          applicationInfo={app}
          key={app.id}
          setIsInAppView={setIsInAppView}
          fetchApplications={fetchApplications}
        />
      ))}
    </MainSectionBase>
  );
};

export default MainSection;
