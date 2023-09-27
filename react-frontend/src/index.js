import React from "react";
import ReactDOMClient from "react-dom/client";
import MyApp from "./MyApp";
import "./index.css";

// container
const container = document.getElementById("root");

// root
const root = ReactDOMClient.createRoot(container);

// init render
root.render(<MyApp />);