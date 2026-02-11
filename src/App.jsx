// Global template styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/jquery.flipster.min.css";
import "./assets/css/magnific-popup.min.css";
import "./assets/css/slick.min.css";
import "./assets/css/style.css";

// Local overrides
import "./App.css";

import Nav from "./components/home/nav.jsx";
import Hero from "./components/home/HeroSection.jsx";
import FeatureSection from "./components/home/FeatureSection.jsx";
import AboutSection from "./components/home/AboutSection.jsx";
import ServiceSection from "./components/home/ServiceSection.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <FeatureSection />
      <AboutSection />
      <ServiceSection />
      {/* Other sections will be added here as React components */}
    </>
  );
}

export default App;
