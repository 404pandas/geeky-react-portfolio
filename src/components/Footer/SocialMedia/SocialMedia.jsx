import {
  EmailShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  FacebookShareButton,
} from "react-share";
import React from "react";

// Import icons
import {
  FaEnvelope,
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaReddit,
  FaFacebook,
} from "react-icons/fa";

const SocialMedia = (props) => {
  return (
    <div>
      <EmailShareButton
        url={`https://404pandas.github.io/`}
        title="Check out this Skyrim themed React Portolio!"
      >
        <FaEnvelope style={{ opacity: "0.5" }} size={18} />
      </EmailShareButton>
      <WhatsappShareButton
        url={`https://404pandas.github.io/`}
        title="Check out this Skyrim themed React Portolio!"
      >
        <FaWhatsapp style={{ opacity: "0.5" }} size={18} />
      </WhatsappShareButton>
      <TwitterShareButton
        url={`https://404pandas.github.io/`}
        title="Check out this Skyrim themed React Portolio!"
      >
        <FaTwitter style={{ opacity: "0.5" }} size={18} />
      </TwitterShareButton>
      <LinkedinShareButton
        url={`https://404pandas.github.io/`}
        title="Check out this Skyrim themed React Portolio!"
      >
        <FaLinkedin style={{ opacity: "0.5" }} size={18} />
      </LinkedinShareButton>
      <RedditShareButton
        url={`https://404pandas.github.io/`}
        title="Check out this Skyrim themed React Portolio!"
      >
        <FaReddit style={{ opacity: "0.5" }} size={18} />
      </RedditShareButton>
      <FacebookShareButton
        url={`https://404pandas.github.io/`}
        title="Check out this Skyrim themed React Portfolio!"
      >
        <FaFacebook style={{ opacity: "0.5" }} size={18} />
      </FacebookShareButton>
    </div>
  );
};

export default SocialMedia;
