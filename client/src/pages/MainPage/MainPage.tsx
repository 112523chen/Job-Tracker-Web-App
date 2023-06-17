import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import {
  application,
  applicationStatusFilterType,
} from "../../components/model";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";
import { MainPageBase } from "./MainPage.style";

interface Props {
  applicationData: application[];
  isInAddView: boolean;
  setIsInAddView: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInRecentView: React.Dispatch<React.SetStateAction<boolean>>;
  isInAppView: boolean;
  setStatusFilter: React.Dispatch<
    React.SetStateAction<applicationStatusFilterType>
  >;
}

const MainPage: React.FC<Props> = ({
  applicationData,
  isInAddView,
  setIsInAddView,
  setIsInRecentView,
  isInAppView,
  setStatusFilter,
}) => {
  let { pathname } = useLocation();

  useEffect(() => {
    setIsInRecentView(pathname === "/recent" ? true : false);
  }, [pathname]);

  const updateCurrentStatusFilter = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const filter: applicationStatusFilterType = event.target
      .value as applicationStatusFilterType;
    setStatusFilter(filter);
  };

  return (
    <MainPageBase isInAddView={isInAddView}>
      <Sidebar isInAddView={isInAddView} isInAppView={isInAppView} />
      <Outlet
        context={{
          applicationData,
          pathname,
          isInAddView,
          setIsInAddView,
          updateCurrentStatusFilter,
        }}
      />
    </MainPageBase>
  );
};

export default MainPage;
