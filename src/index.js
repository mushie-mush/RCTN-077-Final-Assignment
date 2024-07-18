import React from "react";
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./styles/index.css"
import App from "./components/App";

const el = document.querySelector("#root")
const root = ReactDOM.createRoot(el)

root.render(<App />)