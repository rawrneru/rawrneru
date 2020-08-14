import React from "react";

export default function CardElement({ size, title, info }) {
  return (
    <div className={`card card-${size}`}>
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <div className="card-info">
        <p>{info}</p>
      </div>
    </div>
  );
}
