import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import SidePanel from "./SidePanel";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl text-red-600">
    <SidePanel/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
