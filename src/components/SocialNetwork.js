import React from "react";
import Icon from "./Icon";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialDribbble,
  TiMail,
} from "react-icons/ti";

function SocialNetwork() {
  const icons = [
    <TiSocialFacebook />,
    <TiSocialTwitter />,
    <TiSocialDribbble />,
    <TiMail />,
  ];
  return (
    <div className="social-network">
      {icons.map((icon, index) => (
        <a className="social-network__link" href="#" key={index}>
          <Icon icon={icon} className="social-network__icon" />
        </a>
      ))}
    </div>
  );
}

export default SocialNetwork;
