import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Overview from "./pages/Overview";
import Campaign from "./pages/Campaign";
import MarketIntelligence from "./pages/MarketIntelligence";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import CreateNewCampaign from "./pages/custom/CreateNewCampaign";
import CampaignInfo from "./pages/custom/CampaignInfo";
import UpdateCampaignDetail from "./pages/custom/UpdateCampaignDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="/campaign" element={<Campaign />} />
          <Route path="/campaign/:id" element={<CampaignInfo />} />
          <Route path="/campaign/edit/:id" component={UpdateCampaignDetail} />
          <Route path="/marketIntelligence" element={<MarketIntelligence />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route path="/createNewCampaign" element={<CreateNewCampaign />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
