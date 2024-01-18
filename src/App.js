import React from "react";
// import Homepage from "./components/pages/Homepage";
import Generalpage from "./components/pages/Generalpage";

import Navbar from "./components/modules/Navbar";
import Footer from "./components/modules/Footer";
function App() {
  return (
    <>
      <Navbar />
      {/* <Homepage /> */}
      <Generalpage />
      <Footer />
    </>
  );
}

export default App;
