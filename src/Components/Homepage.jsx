import React from "react";
import profile_pic from "../Media/profile-pic.png";
import CardElement from "./Templates/CardElement";

export default function Homepage() {
  return (
    <div className="Homepage">
      <div className="banner">
        <div className="banner-image">
          <img src={profile_pic} alt="rawrneru" />
        </div>
        <div className="banner-title">
          <h1>rawrneru</h1>
          <p>creates cool stuff</p>
        </div>
      </div>
      <div className="card-container">
        <CardElement
          title="work in progress.."
          info="i'm working on it!"
          size="small"
        />
      </div>
    </div>
  );
}
