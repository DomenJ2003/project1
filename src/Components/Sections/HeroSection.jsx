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
      }}
    ></div>
  );
}

export default HeroSection;
