import MainView from "./components/MainView/MainView";
import { application } from "./components/model";
import { useState, useEffect } from "react";
import { getApplicationData } from "./helper/functions";

const App = () => {
  const [applications, setApplications] = useState<application[]>([]);

  const fetchApplications = async () => {
    const applicationData = await getApplicationData();
    setApplications(applicationData);
  };

  useEffect(() => {
    fetchApplications();
    console.log(applications);
  }, []);

  return (
    <div className="App">
      <MainView applicationData={applications} />
    </div>
  );
};

export default App;
