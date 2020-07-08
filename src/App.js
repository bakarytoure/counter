import React from "react";
import Header from "./components/Header";
import Count from "./components/Count";
import "./styles/app.scss";

function App() {
  return (
    <div className="container w-100">
      <Header />
      <Count />
    </div>
  );
}

export default App;
