import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signup" element={<SignupForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
