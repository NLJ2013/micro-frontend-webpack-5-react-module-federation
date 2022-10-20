import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const SidePanel = React.lazy(() => import("sidePanel/SidePanel"));
const Content = React.lazy(() => import("content/Content"));

const App = () => (
  <div className="mx-auto w-full h-screen">
    <div className="text-white h-11 p-3 bg-blue-400 absolute w-full">
      Most Popular JavaScript Web Frameworks and Libraries
    </div>
    <div className="w-full h-full flex flex-row pt-11">
      <div className="w-48" id="left-panel">
        <React.Suspense fallback={<div>Loading...</div>}>
          <SidePanel />
        </React.Suspense>
      </div>
      <div className="w-full" id="right-panel">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Content />
        </React.Suspense>
      </div>
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
