// Global template styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/fontawesome.min.css";
import "./assets/css/jquery.flipster.min.css";
import "./assets/css/magnific-popup.min.css";
import "./assets/css/slick.min.css";
import "./assets/css/style.css";

// Local overrides
import "./App.css";

import Nav from "./components/nav.jsx";
import Hero from "./components/Hero.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      {/* Other sections will be added here as React components */}
    </>
  );
}

export default App;
