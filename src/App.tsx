import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import "./styles/Globals.module.scss";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Routes */}
      <Routes>
        <Route index path="/" element={<Home />} />

        {/* Fallback route */}
        <Route path="/404" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
