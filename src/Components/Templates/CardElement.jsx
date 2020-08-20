import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardElement({ size, title, info, icon, link }) {
  return (
    <a href={link}>
      <div className={`card card-${size}`}>
        <div className="card-text">
          <div className="card-title">
            <h1>{title}</h1>
          </div>
          <div className="card-info">
            <p>{info}</p>
          </div>
        </div>
        <FontAwesomeIcon icon={icon} size="3x" color="var(--background)" />
      </div>
    </a>
  );
}
