import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screen/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProjectItems } from "./screen/ProjectItems";
import { DataScreen } from "./screen/DataScreen";

export const AppRotes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectItems" element={<ProjectItems />} />
        <Route path="/data" element={<DataScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
