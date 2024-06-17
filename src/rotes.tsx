import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screen/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const AppRotes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
