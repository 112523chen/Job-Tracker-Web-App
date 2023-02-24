import MainView from "./components/MainView/MainView";
import { application } from "./components/model";
import { useState, useEffect } from "react";
import { getApplicationData } from "./helper/functions";
import AddView from "./components/AddView/AddView";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecentView from "./components/RecentView/RecentView";
import AnalyticsView from "./components/AnalyticsView/AnalyticsView";

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
              <MainView
                applicationData={applications}
                setIsInAddView={setIsInAddView}
                isInAddView={isInAddView}
                setIsInAppView={setIsInAppView}
              />
            }
          />
          <Route
            path="/recent"
            element={
              <RecentView
                applicationData={applications}
                setIsInAddView={setIsInAddView}
                isInAddView={isInAddView}
                setIsInAppView={setIsInAppView}
              />
            }
          />
          <Route
            path="/analytics"
            element={
              <AnalyticsView
                applicationData={applications}
                setIsInAddView={setIsInAddView}
                isInAddView={isInAddView}
                setIsInAppView={setIsInAppView}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
