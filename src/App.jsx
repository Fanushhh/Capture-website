import AboutSection from "./components/AboutSection";
import { FAQ } from "./components/FAQ";
import { ServiceSection } from "./components/ServicesSection";
import { AboutMePage } from "./pages/AboutMePage";
import { GlobalStyle } from "./components/globalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <AboutSection />
      <ServiceSection />
      <FAQ />
    </>
  );
}

export default App;
