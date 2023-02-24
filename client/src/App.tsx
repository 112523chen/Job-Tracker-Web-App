import { application } from "./components/model";
import { useState, useEffect } from "react";
import AddView from "./components/AddView/AddView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getApplicationData } from "./helper/api/functions";
import MainPage from "./components/MainPage/MainPage";
import RecentPage from "./components/RecentPage/RecentPage";
import AnalyticsPage from "./components/AnalyticsPage/AnalyticsPage";

const App = () => {
  const [applications, setApplications] = useState<application[]>([]);
  const [isInAddView, setIsInAddView] = useState<boolean>(false);
  const [isInAppView, setIsInAppView] = useState<boolean>(false);

  const fetchApplications = async () => {
    const applicationData = await getApplicationData();
    setApplications(applicationData);
  };

  useEffect(() => {
    fetchApplications();
    setIsInAppView(false);
  }, [isInAddView, isInAppView]);

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
                setIsInAppView={setIsInAppView}
                fetchApplications={fetchApplications}
              />
            }
          />
          <Route
            path="/recent"
            element={
              <RecentPage
                applicationData={applications}
                setIsInAddView={setIsInAddView}
                isInAddView={isInAddView}
                setIsInAppView={setIsInAppView}
                fetchApplications={fetchApplications}
              />
            }
          />
          <Route
            path="/analytics"
            element={
              <AnalyticsPage
                applicationData={applications}
                setIsInAddView={setIsInAddView}
                isInAddView={isInAddView}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
