import { styled } from "styled-components";
import Navbar from "./Navbar";
import Reg from "./Modals/Reg";
import Transport from "./Modals/Transport";
import Canteen from "./Modals/Canteen";
import SchoolResource from "./Modals/SchoolResource";
import Faq from "./Modals/Faq";
import Curriculmn from "./Modals/Curriculumn";
import Slider from "./Slider";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Div>
      {/* hero section start */}
      <div className="section-1">
        <div className="heading">
          <Navbar />
          <br /> <br />
          <div className="logo-containers">
            <img src="logo1.png" alt="" className="logo1" />

            <img src="letters.png" alt="" className="let" />

            <img src="logo2.png" alt="" className="logo2" />
          </div>
          {/* the motto */}
          <div className="motto">
            <span className="motto-text">
              A positive learning environment through high expectations.
            </span>
            <Link to="/about" className="about-button">
              About us
            </Link>
          </div>
        </div>
      </div>
      {/* hero section  finish */}
      {/* popup list card start */}
      <div className="resource">
        <h1 className="resource-head">Resources</h1>

        <div className="resource1">
          <div className="resource-card">
            <h1>Registration</h1>
            <Reg />
          </div>
          <div className="resource-card">
            <h1>Transportation </h1>
            <Transport />
          </div>
          <div className="resource-card">
            <h1>Canteen Services</h1>
            <Canteen />
          </div>
        </div>

        <div className="resource2">
          <div className="resource-card">
            <h1>School Resources</h1>
            <SchoolResource />
          </div>

          <div className="resource-card">
            <h1>FAQ</h1>
            <Faq />
          </div>

          <div className="resource-card">
            <h1>Notice Board</h1>
            <Curriculmn />
          </div>
        </div>
      </div>
      {/* popup list card end */}
      <br /> <br /> <br />
      {/* extra curricular activities section */}
      <div className="curricular-section">
        <h1>
          Extra Curricular <br /> Ativities
        </h1>
        <p>
          {" "}
          The Centers for Disease Control and Prevention (CDC) has made new
          recommendations for contact tracing in school based settings. Click
          the document link below for more information.{" "}
        </p>
      </div>
      {/* slider section but i import it from slider.jsx */}
      <div className="slider-containers">
        <Slider />
      </div>
      {/* slider section */}
      {/* section 4 start here */}
      <div className="section-4">
        <p className="text1">
          Dele Preparatory School <br /> and Dele Peddle <br /> International
          High <br /> School{" "}
        </p>

        <p className="text2">
          OPEN TO PARENTS & GUESTS <br /> Mondays - Thursdays 8:45am - 3:00pm{" "}
          <br /> Fridays 8:45am - 2:30pm <br /> <br /> PUPILS HOURS <br />{" "}
          Mondays - Thursdays 7:00am - 3:30pm <br /> Fridays 7:00 - 2:30pm{" "}
          <br /> <br />
          GENERAL INFORMATION <br /> All Visitors are Kindly Asked To Sign In At
          The Security Post & Wait For Further Instructions Before Proceeding
          Into The School Compound. We Apologize For Any Inconvenience{" "}
        </p>
      </div>
      {/* section 4 ends here */}
      {/* icons section start here  */}
      <div className="icons">
        <div className="icon1">
          <img src="icon1.png" alt="" />
          <h2>40+</h2>
          <p>Years of Excellence</p>
        </div>
        <div className="icon1">
          <img src="icon2.png" alt="" />
          <h2>500+</h2>
          <p>Number of Students</p>
        </div>
        <div className="icon1">
          <img src="icon3.png" alt="" />
          <h2>70</h2>
          <p>Teacher and Faculty</p>
        </div>
      </div>
      {/* icons section ends here */}
      {/* footer  component */}
      <Footer />
    </Div>
  );
};

export default HomePage;
const Div = styled.div`
  overflow: hidden;
  width: 100%;

  .section-1 {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 100%
      ),
      url("Main.png"), lightgray 0px -369.456px / 100% 205.861% no-repeat;
    height: 500px;
    height: 700px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .heading {
    width: 100%;
    height: 700px;
  }

  .logo-containers {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    position: relative;
    margin-bottom: 0;
    margin-top: 100px;
  }

  // .sec h1{
  //   color: #800020;
  //   text-align: center;
  //   font: 700 50px/50px "Fuzzy Bubbles", sans-serif;
  //   text-transform: uppercase;
  //   position: relative;
  //   width: 1498px;
  //   height: 191px;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   margin:0;

  // }

  .logo1 {
    position: absolute;
    left: 180px;
    bottom: 70px;
    width: 120px;
    height: 120px;
  }

  .logo2 {
    position: absolute;
    right: 180px;
    bottom: 70px;
    width: 120px;
    height: 120px;
  }

  .motto {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .motto-text {
    color: #228b22;
    font-family: " Bhoo loo Bhai", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    text-align: center;
    margin-bottom: 35px;
    text-align: center;
  }

  .about-button {
    width: 157.52px;
    padding: 12px 35.52px 12px 35px;
    align-items: center;
    border-radius: 30px;
    background: rgba(190, 30, 45, 0.75);
    outline: none;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    cursor: pointer;
    text-decoration: none;

    color: #faff00;
    font-family: "Baloo Bhai", sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .resource {
    background: linear-gradient(180deg, #fff 30%, rgba(0, 0, 0, 0) 100%);
  }

  .let {
    width: 80%;
  }

  .resource {
    padding-top: 90px;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: linear-gradient(180deg, #fff 30%, rgba(0, 0, 0, 0) 100%);
    max-width: 1920px;
    height: 650px;
  }

  .resource-head {
    color: #228b22;
    text-align: center;
    font: 700 55px/97.5px "Fuzzy Bubbles", sans-serif;
  }

  .resource1 {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
  }

  .resource2 {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  .resource-card {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 46px 31px 51px 31px;
    align-items: center;
    border-radius: 3px;
    background-color: #800020;
    text-align: center;
  }

  .resource-card span {
    display: flex;
    padding: 0px 13.31px 1.8px 13px;
    align-items: flex-start;
    border: 1px solid rgba(255, 255, 255, 0.5);

    color: rgba(255, 255, 255, 0.25);
    text-align: center;
    font: 400 16px/28.8px "Baloo Bhai", sans-serif;
    cursor: pointer;
  }

  .resource-card h1 {
    color: #fff;
    text-align: center;
    font: 600 18px/26px "Baloo Bhai 2", sans-serif;
    text-transform: uppercase;
  }

  .curricular-section {
    background: linear-gradient(92deg, #be1e2d 25%, rgba(0, 0, 0, 0) 70%),
      #01263d;
    max-width: 1920px;
    height: 416px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 200px;
  }

  .curricular-section h1 {
    color: #fff;
    font-family: Fuzzy Bubbles;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 84px; /* 150% */
  }

  .curricular-section p {
    color: #faff00;
    text-align: right;
    font-family: "Baloo Bhai", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px; /* 160% */
    max-width: 400px;
  }

  // .curricular-section img {
  //   objet-fit: cover;
  //   width: 100%;
  // }

  .slider-containers {
    background: linear-gradient(0deg, #fff 0%, #01263d 100%);
    display: flex;
    max-width: 1920px;
    max-height: 900px;
    padding: 120px 0px 110px 0px;
    border: 1px solid black;
  }

  .section-4 {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.83) 50%, #01263d 100%),
      url("m3.png");
    max-width: 100%;
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    display: flex;
    padding-top: 20px;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .text1 {
    justify-content: center;
    color: #228b22;
    font-family: "Fuzzy Bubbles", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    max-width: 50%;

    height: 400px;
  }

  .text2 {
    color: #faff00;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 550;
    line-height: 28.8px;
    max-width: 450px;

    height: 400px;
  }

  .icons {
    background: linear-gradient(
      180deg,
      #01263d 0%,
      rgba(1, 38, 61, 0.93) 50%,
      #000615 100%
    );
    max-width: 1920px;
    height: 300px;
    justify-content: center;
    display: flex;
    gap: 40px;
    color: white;
    align-items: center;
  }

  .icon1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .icon1 h2 {
    color: #fff;
    text-align: center;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    margin: 0;
  }

  .icon1 p {
    color: #fff;
    text-align: center;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    margin: 0;
  }

  .icon1 img {
    width: 41px;
    height: 40px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    .logo2 {
      position: absolute;
      right: 50px;
      bottom: 60px;
      width: 120px;
      height: 120px;
    }

    .logo1 {
      position: absolute;
      left: 50px;
      bottom: 60px;
      width: 120px;
      height: 120px;
      margin-right: 20px;
    }

    .let {
      width: 100%;
    }

    .curricular-section {
      display: flex;
      flex-direction: column;
      height: auto;
      background: linear-gradient(
          to bottom,
          // 92deg,
          #be1e2d 25%,
          rgba(0, 0, 0, 0) 70%
        ),
        #01263d;
      gap: 20px;
      text-align: center;
    }
    .curricular-section p {
      text-align: center;
    }
    .resource {
      display: block;
      margin-top: 0px;
      padding-top: 20px;
      height: auto;
    }

    .resource1 {
      display: block;
      gap: 20px;

      align-items: center;
      padding: 0;
    }

    .resource2 {
      display: block;
      gap: 20px;

      align-items: center;
      padding: 0;
    }

    .logo-containers {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      width: 100%;
      margin-top: 200px;
      position: relative;
    }

    .resource-card {
      justify-content: center;
      margin: 10px auto;
    }

    .slider-containers {
      background: linear-gradient(0deg, #fff 0%, #01263d 100%);
      display: flex;
      padding: 120px 0px 110px 0px;
      border: 1px solid black;
      margin: 0;
    }
    .section-4 {
      display: flex;
      flex-direction: column;
      text-align: center;
      border: none;
      height: auto;
    }

    .text1 {
      font-size: 40px;
    }

    .text2 {
      font-size: 20px;
    }

    .icons {
      gap: 2px;
      display: flex;
    }

    .resource-head {
      font-size: 45px;
    }

    .motto-text {
      font-size: 20px;
    }
  }
`;
