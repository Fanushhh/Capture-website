import { ContactUsPage } from "./pages/ContactUs";
import { OurWork } from "./pages/OurWork";
import { GlobalStyle } from "./components/globalStyle";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { AboutMePage } from "./pages/AboutMePage";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<AboutMePage />} />

        <Route path="/contact-us" element={<ContactUsPage />} />

        <Route path="/work" element={<OurWork />} />
      </Routes>
    </>
  );
}

export default App;
