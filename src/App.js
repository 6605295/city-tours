import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Tourlist from "./components/Tourlist";
const App = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Tourlist></Tourlist>
    </React.Fragment>
  );
};

export default App;
