import React from "react";
import { application, applicationStatusType } from "../model";
import { useState } from "react";
import ApplicationView from "../Views/ApplicationView/ApplicationView";
import { getApplicationColor } from "../../helper/functions";
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
  setIsInAppView: React.Dispatch<React.SetStateAction<boolean>>;
  fetchApplications: () => Promise<void>;
}

const Application: React.FC<Props> = ({
  applicationInfo,
  setIsInAppView,
  fetchApplications,
}) => {
  const [applicationState, setApplicationState] = useState<boolean>(false);
  const [hoverState, setHoverState] = useState<boolean>(false);
  const { isInAddView } = useOutletContext<{
    applicationData: application[];
    pathname: string;
    isInAddView: boolean;
    setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  }>();

  const handleHoverEnter = (): void => {
    setHoverState(true);
  };

  const handleHoverExit = (): void => {
    setHoverState(false);
  };

  return (
    <ApplicationBase
      onMouseEnter={() => {
        if (!isInAddView) {
          handleHoverEnter();
        }
      }}
      onMouseLeave={() => {
        if (!isInAddView) {
          handleHoverExit();
        }
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
        <ApplicationDescription>
          {applicationInfo.description}
        </ApplicationDescription>
      </ApplicationMain>
      <ApplicationActions>
        {hoverState ? (
          <>
            <EditButton
              applicationState={applicationState}
              setApplicationState={setApplicationState}
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
