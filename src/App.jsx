import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/globalStyle";
import { Nav } from "./components/Nav";
import { AboutMePage } from "./pages/AboutMePage";
import { ContactUsPage } from "./pages/ContactUs";
import { MovieDetailPage } from "./pages/MovieDetails";
import { OurWork } from "./pages/OurWork";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutMePage />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetailPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
