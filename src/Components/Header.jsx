import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

function themeToggle() {
  if (current_mode) {
    document.documentElement.style = `--text: ${dark_mode.blue}; --banner: ${dark_mode.gray}; --background: ${dark_mode.black}; --header-text: ${dark_mode.blue}; --main-text: ${dark_mode.blue}`;
  } else {
    document.documentElement.style = `--text: ${light_mode.white}; --banner: ${light_mode.blue}; --background: ${light_mode.white}; --header-text: ${light_mode.blue}; --main-text: ${light_mode.black}`;
  }

  current_mode = !current_mode;
}

function themeOnLoad() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  )
    return themeToggle();
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

themeOnLoad();

export default function Header() {
  return (
    <div className="Header">
      <div className="header-title">
        <div style={{ opacity: 0 }}>
          <FontAwesomeIcon icon={faPalette} size="2x" color="var(--text)" />
        </div>
        <h1>wara works</h1>
        <div className="icon-menu" onClick={themeToggle}>
          <FontAwesomeIcon icon={faPalette} size="2x" color="var(--text)" />
        </div>
      </div>
    </div>
  );
}
