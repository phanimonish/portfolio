import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Navbar from "../../Components/Navbar/Navbar";
import heroImage from "../../Images/hero-image.png";
import "./Home.css";
import { Button } from "@mui/material";
import html from "../../Images/Html.png";
import css from "../../Images/css.png";
import js from "../../Images/js.png";
import bootstrap from "../../Images/bootstrap.png";
import mui from "../../Images/mui.png";
import flutter from "../../Images/flutter.png";
import react from "../../Images/react.png";
import webDevelopment from "../../Images/web-development.jpg";
import appDevelopment from "../../Images/app-development.jpg";
import statview from "../../Images/statview.png";
import airbnb from "../../Images/airbnb-clone.png";
import shopco from "../../Images/ecom.png";
import Footer from "../../Components/Footer/Footer";
import SendIcon from "@mui/icons-material/Send";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <div className="hero-container">
        <Box>
          <Grid container rowSpacing={1}>
            <Grid className="head-left-content" item xs={12} md={6}>
              <div>
                <p className="hero-intro">✋ Hello, this is...</p>
                <h1 className="hero-head">Phani Monish Kasinadhuni</h1>
                <p className="hero-para">
                  I am proficient in the domains of{" "}
                  <b>Web development, UI/UX Designing</b> and{" "}
                  <b>App Development.</b> I have Strong ability to handle
                  complex projects, Innovative, creative, and interested to
                  learn new proficiencies.
                </p>
                <div className="hero-buttons">
                  <Button
                    className="hero-get-in-touch-button"
                    variant="contained"
                  >
                    Get in Touch
                  </Button>
                  <Button
                    className="hero-check-my-work-button"
                    variant="outlined"
                  >
                    View my Work
                  </Button>
                </div>
              </div>
            </Grid>

            <Grid className="hero-image-container" item xs={12} md={6}>
              <img className="hero-image" src={heroImage} alt="" />
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className="technologies-container">
        <div className="technologies-head">
          <h1 className="tech-head">I have Expertise in..</h1>
        </div>
        <div className="technologies-subhead">
          <p className="tech-subhead">
            I am skilled and experienced with the below mentioned technologies
          </p>
        </div>
        <div className="technologies-images-1">
          <img className="tech-image" src={html} alt="" />
          <img className="tech-image" src={css} alt="" />
          <img className="tech-image" src={js} alt="" />
          <img className="tech-image" src={react} alt="" />
          <img className="tech-image" src={flutter} alt="" />
          <img className="tech-image" src={mui} alt="" />
          <img className="tech-image" src={bootstrap} alt="" />
        </div>
        <div className="technologies-images-2"></div>
      </div>

      <div className="services-container">
        <div className="services-head">
          <h1>Offered Services</h1>
        </div>
        <div className="services-box">
          <div className="service-image-box">
            <img className="service-image" alt="" src={webDevelopment} />
            <h2>Web Development</h2>
          </div>
          <div className="service-image-box">
            <img className="service-image" alt="" src={appDevelopment} />
            <h2>App Development</h2>
          </div>
        </div>
      </div>

      <div className="projects-container">
        <div className="projects-head">
          <h1>My Projects</h1>
        </div>
        <div className="projects-box">
          <div className="project1-box">
            <div className="project-image1-box">
              <img className="project-image1" alt="" src={statview} />
              <h2>StatView Dashboard</h2>
            </div>
            <div className="project-description">
              <p className="project1-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>

              <Button className="view-more-btn" variant="outlined">
                view more
              </Button>
            </div>
          </div>
        </div>

        <div className="project1-box project-2" sx={{ flexGrow: 1 }}>
          <div className="project-description">
            <p className="project1-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. <br />
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <Button className="view-more-btn" variant="outlined">
              view more
            </Button>
          </div>
          <div className="project-image1-box">
            <img className="project-image1" alt="" src={airbnb} />
            <h2>Airbnb-Clone</h2>
          </div>
        </div>

        <div className="project1-box">
          <div className="project-image1-box">
            <img className="project-image1" alt="" src={shopco} />
            <h2>Shop.Co (ecommerce app)</h2>
          </div>
          <div className="project-description">
            <p className="project1-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. <br />
              It was popularized in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <Button className="view-more-btn" variant="outlined">
              view more
            </Button>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <h1>Have a project in your mind?</h1>
        <div className="email-box">
          <input
            placeholder="Enter your e-mail address"
            className="input-box"
          />
            <SendIcon className="send-btn" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
