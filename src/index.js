import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ReactGa from "react-ga";

ReactGa.initialize("UA-241418456-1");

ReactGa.pageview("/");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
