import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screen/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProjectItems } from "./screen/ProjectItems";

export const AppRotes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectItems" element={<ProjectItems />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
