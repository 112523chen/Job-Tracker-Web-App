import React from "react";
import { MainPageStates, application, applicationStatusType } from "../model";
import { useState } from "react";
import ApplicationView from "../Views/ApplicationView/ApplicationView";
import { getApplicationColor } from "../../helper/main/functions";
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import EditButton from "../Buttons/EditButton/EditButton";
import { useOutletContext } from "react-router-dom";
import {
  ApplicationActions,
  ApplicationBase,
  ApplicationCompany,
  ApplicationDescription,
  ApplicationMain,
  ApplicationRole,
  ApplicationSide,
} from "./Application.style";

interface Props {
  applicationInfo: application;
  fetchApplications: () => Promise<void>;
  isInAppView: boolean;
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
}

const Application: React.FC<Props> = ({
  applicationInfo,
  fetchApplications,
  isInAppView,
  setIsInAppView,
}) => {
  const [applicationState, setApplicationState] = useState<boolean>(false);
  const [hoverState, setHoverState] = useState<boolean>(false);

  const { isInAddView } = useOutletContext<MainPageStates>();

  const handleHoverEnter = (): void => {
    setHoverState(true);
  };

  const handleHoverExit = (): void => {
    setHoverState(false);
  };

  return (
    <ApplicationBase
      onMouseEnter={() => {
        handleHoverEnter();
      }}
      onMouseLeave={() => {
        handleHoverExit();
      }}
    >
      {applicationState ? (
        <ApplicationView
          applicationInfo={applicationInfo}
          setApplicationState={setApplicationState}
          applicationState={applicationState}
          setIsInAppView={setIsInAppView}
        />
      ) : null}
      <ApplicationSide
        theme={{
          main: getApplicationColor(
            applicationInfo.status as applicationStatusType
          ),
        }}
      ></ApplicationSide>
      <ApplicationMain>
        <ApplicationRole>{applicationInfo.title}</ApplicationRole>
        <ApplicationCompany>{applicationInfo.company}</ApplicationCompany>
      </ApplicationMain>
      <ApplicationActions>
        {hoverState && !isInAppView && !isInAddView ? (
          <>
            <EditButton
              applicationState={applicationState}
              setApplicationState={setApplicationState}
              setIsInAppView={setIsInAppView}
              isInAppView={isInAppView}
            />
            <DeleteButton
              id={applicationInfo.id}
              fetchApplications={fetchApplications}
            />
          </>
        ) : null}
      </ApplicationActions>
    </ApplicationBase>
  );
};

export default Application;
