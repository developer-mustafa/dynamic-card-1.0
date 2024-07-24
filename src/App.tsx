import React from "react";
import CardInfo from "./components/CardInfo";



const App = () => {
  return (
    <div className="bg-slate-900 p-2">
      <h1 className="text-xl sm:text-4xl font-bold text-center text-yellow-500 p-4">
        <span className="text-green-500">Profile Info Projects</span>{" "}
        ,Everything as your need..
      </h1>
      <CardInfo />
    </div>
  );
};

export default App;

// export function Hello(): JSX.Element {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("p", {}, "hello from 1"),
//     React.createElement("p", {}, "hello from 2")
//   );
// }

// export function Hello1(): JSX.Element {
//   return React.createElement("h2", {}, "hello 1");
// }

// export function Hello2(): JSX.Element {
//   return React.createElement("h2", {}, "hello 2");
// }
