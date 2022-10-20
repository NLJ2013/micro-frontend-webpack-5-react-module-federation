import React, { useState } from "react";
import Angular from "./Angular";
import { ReactJs } from "./ReactJs";
import VueJs from "./VueJs";

export default function Content({}) {
  const [frameWork, setFramework] = useState("react");
  const setPage = (value: string) => {
    setFramework(value);
  };
  React.useEffect(() => {
    window.addEventListener("pageEvent", (event) => setPage(event.detail));
    return () => window.removeEventListener("pageEvent", null);
  }, []);
  return (
    <div className="bg-blue-100 p-4 h-full flex flex-row items-stretch text-2xl">
      {frameWork === "react" && <ReactJs />}
      {frameWork === "angular" && <Angular />}
      {frameWork === "vue" && <VueJs />}
    </div>
  );
}
