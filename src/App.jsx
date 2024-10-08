import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Overview from "./pages/Overview";
import Campaign from "./pages/Campaign";
import MarketIntelligence from "./pages/MarketIntelligence";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import CreateNewCampaign from "./pages/custom/CreateNewCampaign";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="/campaign" element={<Campaign />} />
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
