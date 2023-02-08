import React from "react";
import loadingSceneLnd from "../assets/images/openingSceneLandscape.gif";
import loadingScenePrt from "../assets/images/openingScenePortrait.gif";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
const Home = () => {
  return (
    <>
      <div id="loadingScene">
        <embed src={loadingSceneLnd} alt="Skyrim opening scene. Landscape" />
        <embed src={loadingScenePrt} alt="Skyrim opening scene. Portrait" />
      </div>
      <h1>Home</h1>
      <Header />
      <Footer />
    </>
  );
};

export default Home;
