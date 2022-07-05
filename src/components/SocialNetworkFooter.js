import React from "react";
import { IconContext } from "react-icons";
import {
  TiSocialPinterest,
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialDribbble,
} from "react-icons/ti";

function SocialNetworkFooter() {
  const icons = [
    <TiSocialPinterest />,
    <TiSocialTwitter />,
    <TiSocialFacebook />,
    <TiSocialDribbble />,
  ];
  return (
    <div className="social-network-footer">
      {icons.map((icon, index) => (
        <a className="social-network-footer__link" href="#" key={index}>
          <div className="social-network-footer__icon-box">
            <IconContext.Provider
              value={{ className: "social-network-footer__icon" }}
            >
              {icon}
            </IconContext.Provider>
          </div>
        </a>
      ))}
    </div>
  );
}

export default SocialNetworkFooter;
