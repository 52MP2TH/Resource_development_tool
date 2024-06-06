import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import HiringManagerDashBoard from "./components/hiringManager/HiringManagerDashBoard";
import ReleaseManagerDashBoard from "./components/releaseManager/ReleaseManageDashBoard";
import HiringAvaiable from "./components/hiringManager/HiringAvailable";
import ViewProfiles from "./components/hiringManager/ViewProfiles";
import ReservedProfiles from "./components/hiringManager/ReservedProfiles";
import OnboardedProfiles from "./components/hiringManager/OnboardedProfiles";
import ViewJobs from "./components/hiringManager/ViewJobs";
import CreateJobs from "./components/hiringManager/CreateJobs";
import DownloadTemplate from "./components/releaseManager/DownloadTemplate";
import UploadTemplate from "./components/releaseManager/UploadTempate";
import ViewResources from "./components/releaseManager/ViewResources";
import Reports from "./components/Reports";
import NoPage from "./components/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Home />}></Route>
          <Route path="hiringManager/">
            <Route index  element={<HiringManagerDashBoard  />}></Route>
            <Route path="profiles" element={<ViewProfiles  />}></Route>
            <Route path="available" element={<HiringAvaiable />}></Route>
            <Route path="reservedProfiles" element={<ReservedProfiles  />}></Route>
            <Route path="onboardedProfiles" element={<OnboardedProfiles  />}></Route>
            <Route path="jobs" element={<ViewJobs />}></Route>
            <Route path="createJob" element={<CreateJobs />}></Route>
          </Route>
          <Route path="releaseManager/">
            <Route index element={<ReleaseManagerDashBoard />}></Route>
            <Route path="downloadTemplate" element={<DownloadTemplate />} />
            <Route path="uploadTemplate" element={<UploadTemplate />} />
            <Route path="viewResources" element={<ViewResources />} />
          </Route>
          <Route path='reports' element={<Reports />}></Route> 
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
