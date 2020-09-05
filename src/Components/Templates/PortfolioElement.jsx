import React from "react";

export default function PortfolioElement({
  title,
  subtitle,
  background,
  link,
}) {
  return (
    <div
      className="pfl-card"
      style={{ "background-image": `url(${background})` }}
    >
      <a href={link}>
        <div className="pfl-card-inner" id={title}>
          <h1 className="pfl-title">{title}</h1>
          <p className="pfl-subtitle">{subtitle}</p>
        </div>
      </a>
    </div>
  );
}
