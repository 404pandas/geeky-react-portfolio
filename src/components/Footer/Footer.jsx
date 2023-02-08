import SocialMedia from "./SocialMedia/SocialMedia.jsx";
import React from "react";
import "./Footer.css";

import Container from "@mui/material/Container";
import FooterSVG from "../../assets/images/svgs/footer.svg";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <>
      <Container
        className="footerContainer"
        maxWidth="lg"
        disableGutters={true}
      >
        <FooterSVG className="footerSVG" />
        <Typography className="footerText" variant="caption" color="initial">
          Like this portfolio? Share it by clicking an icon below!
        </Typography>
        <SocialMedia></SocialMedia>
      </Container>
    </>
  );
}
