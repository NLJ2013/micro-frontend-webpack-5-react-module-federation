import React, { useState } from "react";

export default function SidePanel({}) {
  const [activeButton, setActiveButton] = useState("react");
  const loadRelevantPage = (item) => () => {
    setActiveButton(item);
    const event = new CustomEvent("pageEvent", { detail: item });
    window.dispatchEvent(event);
  };
  return (
    <div className="cursor-pointer bg-blue-300 h-full text-gray-500 flex flex-col">
      <button
        className={`hover:bg-blue-400 hover:text-white p-1 font-semibold ${
          activeButton == "react" ? "bg-blue-500 text-white" : ""
        }`}
        onClick={loadRelevantPage("react")}
      >
        React.js
      </button>
      <button
        className={`hover:bg-blue-400 hover:text-white p-1 font-semibold ${
          activeButton == "angular" ? "bg-blue-500 text-white" : ""
        }`}
        onClick={loadRelevantPage("angular")}
      >
        Angular
      </button>
      <button
        className={`hover:bg-blue-400 hover:text-white p-1 font-semibold ${
          activeButton == "vue" ? "bg-blue-500 text-white" : ""
        }`}
        onClick={loadRelevantPage("vue")}
      >
        Vue.js
      </button>
    </div>
  );
}
