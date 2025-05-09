import React from "react";
import styles from "./HeroStyles.module.css";
import HeroImg from "../../assets/assets/hero-img.png";
import sun from "../../assets/assets/sun.svg";
import moon from '../../assets/assets/moon.svg';
// import twitterLight from '../../assets/assets/twitter-light.svg';
// import twitterDark from '../../assets/assets/twitter-dark.svg';
import githubLight from '../../assets/assets/github-light.svg';
import githubDark from '../../assets/assets/github-dark.svg';
import linkedinLight from '../../assets/assets/linkedin-light.svg';
import linkedinDark from '../../assets/assets/linkedin-dark.svg';
import Resume from '../../assets/assets/Resume.pdf';
import { useTheme } from "../../Common/ThemeContext";
import Navbar from "../Navbar/Navbar";
// import { Route, Routes } from "react-router-dom";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";

function Hero() {
 const {theme , toggleTheme} = useTheme();

const themeIcon = theme === 'light' ? sun : moon;
// const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
const githubIcon = theme === 'light' ? githubLight : githubDark;
const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


  return (
      <>
      <Navbar/>
     
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={HeroImg}
          alt="profile picture "
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Hy , I'm <br />
          Jaimin <br /> Modi{" "}
        </h1>
        <h2>I'M a Frontend Developer</h2>
        <span>
          <a href="https://github.com/jaimin45-art" target="_blank">
          <img src={githubIcon} alt="Github Logo" />
          </a>
          <a href="https://linkedin.com" target="_blank">
          <img src={linkedinIcon} alt="LinkedIn Logo" />
          </a>
        </span>
        <p>
        "Empowering businesses by delivering <br />
        modern React solutions <br /> with a focus on performance and user experience."
        </p>
        <a href={Resume} download>
            <button className="hover">Resume</button>
        </a>
      </div>
    </section>
    </>
  );
}

export default Hero;






























{/* <a href="https://twiter.com" target="_blank">
<img src={twitterIcon} alt="Twitter Logo" />
</a> */}