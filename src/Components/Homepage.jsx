import React from "react";
import profile_pic from "../Media/profile-pic.png";
import CardElement from "./Templates/CardElement";
import PortfolioElement from "./Templates/PortfolioElement";
import {
  faTwitter,
  faTwitch,
  faYoutube,
  faDiscord,
} from "@fortawesome/fontawesome-free-brands";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

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
          title="twitter"
          info="shitposting"
          size="small"
          icon={faTwitter}
          link="https://twitter.com/rawrneru"
        />
        <CardElement
          title="twitch"
          info="video gaming"
          size="small"
          icon={faTwitch}
          link="https://www.twitch.tv/rawrneru"
        />
        <CardElement
          title="youtube"
          info="content uploading"
          size="small"
          icon={faYoutube}
          link="https://www.youtube.com/channel/UCEfmljfyo9QZt-w10QJLoKw"
        />
        <CardElement
          title="osu!"
          info="circle clicking"
          size="small"
          icon={faDotCircle}
          link="https://osu.ppy.sh/users/5134380"
        />
        <CardElement
          title="discord"
          info="social interaction"
          size="small"
          icon={faDiscord}
          link="https://discord.com/invite/N3mHtrm"
        />
      </div>
      <div className="pfl-container">
        <h1 className="pfl-header">personal projects</h1>
        <PortfolioElement
          title="ferthrum"
          subtitle="myriad collection"
          link="https://streamable.com/0j36kj"
          background="https://i.gyazo.com/75317ef58ca0ef324aaf8fb3b9edcaab.png"
        ></PortfolioElement>
        <PortfolioElement
          title="valholl"
          subtitle="project valholl"
          link="https://streamable.com/irst7w"
          background="https://i.gyazo.com/e81c46be1e599d4c20619a2ea6c1480c.png"
        ></PortfolioElement>
      </div>
    </div>
  );
}
