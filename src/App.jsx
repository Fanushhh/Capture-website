import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./components/globalStyle";
import { Nav } from "./components/Nav";
import { AboutMePage } from "./pages/AboutMePage";
import { ContactUsPage } from "./pages/ContactUs";
import { MovieDetailPage } from "./pages/MovieDetails";
import { OurWork } from "./pages/OurWork";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />

      <Routes>
        <Route path="/" element={<AboutMePage />} />
        <Route path="/work" element={<OurWork />} />
        <Route path="/work/:id" element={<MovieDetailPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
    </>
  );
}

export default App;
