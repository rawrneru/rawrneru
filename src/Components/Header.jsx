import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function menuClick() {
  return alert("chill bro let me finish the website first");
}

function themeToggle() {
  if (current_mode) {
    document.documentElement.style = `--text: ${dark_mode.blue}; --banner: ${dark_mode.gray}; --background: ${dark_mode.black}; --header-text: ${dark_mode.blue}; --main-text: ${dark_mode.blue}`;
  } else {
    document.documentElement.style = `--text: ${light_mode.white}; --banner: ${light_mode.blue}; --background: ${light_mode.white}; --header-text: ${light_mode.blue}; --main-text: ${light_mode.black}`;
  }

  current_mode = !current_mode;
}

let current_mode = true;

let light_mode = {
  black: "#272727",
  blue: "#7d83ff",
  white: "#f7f7ff",
};

let dark_mode = {
  black: "#1c1d21",
  blue: "#7d83ff",
  gray: "#292f36",
};

export default function Header() {
  return (
    <div className="Header" onLoad={themeToggle}>
      <div className="header-title">
        <div className="icon-menu" onClick={themeToggle}>
          <FontAwesomeIcon icon={faBars} size="2x" color="var(--text)" />
        </div>
        <h1>wara works</h1>
      </div>
    </div>
  );
}
