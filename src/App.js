import React from "react";
import "./Stylesheets/reset.css";
import "./Stylesheets/App.css";
import "./Stylesheets/header.css";
import "./Stylesheets/cardElement.css";
import "./Stylesheets/mediaQuery.css";
import "./Stylesheets/pflElement.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}
