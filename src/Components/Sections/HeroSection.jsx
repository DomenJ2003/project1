import { useState } from "react";
import "./HeroSection.css";

function HeroSection() {
  const getRndImg = () => {
    const num = Math.floor(Math.random() * 7) + 1;
    let s =
      "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.1) 55%), url('../../../public/bg" +
      num.toString() +
      ".jpg')";
    return s;
  };

  return (
    <div
      className="hero-section"
      style={{
        background: `${getRndImg()}`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <h1 className="hero-title">Connect with great local businesses</h1>
      <h4></h4>
    </div>
  );
}

export default HeroSection;
