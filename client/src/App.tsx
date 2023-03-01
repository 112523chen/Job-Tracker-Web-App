import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import MainSection from "./pages/MainPage/MainSection";
import RecentSection from "./pages/RecentPage/RecentSection";
import AnalyticsSection from "./pages/AnalyticsPage/AnalyticsSection";
import AddView from "./components/Views/AddView/AddView";
import { application } from "./components/model";
import {
  getApplicationData,
  getApplicationDataByModifiedDate,
} from "./helper/api/functions";

const App = () => {
  const [applications, setApplications] = useState<application[]>([]);
  const [isInAddView, setIsInAddView] = useState<boolean>(false);
  const [isInAppView, setIsInAppView] = useState<boolean>(false);
  const [isInRecentView, setIsInRecentView] = useState<boolean>(false);

  const fetchApplications = async (dataKind: string = "") => {
    let applicationData;

    switch (dataKind) {
      case "recentModified":
        applicationData = await getApplicationDataByModifiedDate();
        break;
      default:
        applicationData = await getApplicationData();
        break;
    }

    setApplications(applicationData);
  };

  useEffect(() => {
    let arg = isInRecentView ? "recentModified" : "";
    fetchApplications(arg);
  }, [isInAddView, isInAppView, isInRecentView]);

  return (
    <div className="App">
      {isInAddView ? (
        <AddView setIsInAddView={setIsInAddView} isInAddView={isInAddView} />
      ) : null}

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                applicationData={applications}
                setIsInAddView={setIsInAddView}
                isInAddView={isInAddView}
                setIsInRecentView={setIsInRecentView}
                isInAppView={isInAppView}
              />
            }
          >
            <Route
              index
              element={
                <MainSection
                  fetchApplications={fetchApplications}
                  setIsInAppView={setIsInAppView}
                  isInAppView={isInAppView}
                />
              }
            />
            <Route
              path="recent"
              element={
                <RecentSection
                  fetchApplications={fetchApplications}
                  setIsInAppView={setIsInAppView}
                  isInAppView={isInAppView}
                />
              }
            />
            <Route path="analytics" element={<AnalyticsSection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
