import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Mainprovider from "./Context/Mainprovider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Mainprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Mainprovider>
  </React.StrictMode>
);
