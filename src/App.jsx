import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Overview from "./pages/Overview";
import Campaign from "./pages/Campaign";
import MarketIntelligence from "./pages/MarketIntelligence";
import { Settings } from "lucide-react";
import Support from "./pages/Support";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
