import { styled } from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Academics = () => {
  return (
    <Div>
      {/* hero section starts here */}
      <div className="section">
        <div className="head">
          <Navbar />
          <br /> <br />
          <div className="sec">
            <img src="logo1.png" alt="" className="logo1" />

            <h1 className="">
              Academics
              <hr />
            </h1>

            <img src="logo2.png" alt="" className="logo2" />
          </div>
        </div>
      </div>

      {/* hero section ends here */}

      {/* i just have two sections for this page and section1 start here */}
      <div className="section--1">
        <center>
          Dele Preparatory School and Dele Peddle International High School will
          be embracing, teaching about, <br /> modeling and expecting the
          following CORE <br /> VALUES to be infused throughout the building.{" "}
          <br /> Please help us model & teach these from home! It takes a
          village to raise a child! Let’s work to strengthen our village!.
        </center>
      </div>

      {/* section1 end here  */}

      {/* section2 starts here */}
      <div className="section--2">
        <center>
          <h1 className="section--2-head">Performance Plans</h1>
          <span>
            Dele Preparatory School and Dele Peddle International High School
            will be embracing, teaching about, <br /> modeling and expecting the
            following CORE <br /> VALUES to be infused throughout the building.{" "}
            <br /> Please help us model & teach these from home! It takes a
            village to raise a child! Let’s work to strengthen our village!.
          </span>
        </center>
      </div>

      {/* section2 ends here */}

      <Footer />
    </Div>
  );
};

export default Academics;

const Div = styled.div`
  overflow: hidden;
  .section {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 100%
      ),
      url("Main.png"), lightgray 0px -369.456px / 100% 205.861% no-repeat;
    height: 500px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .head {
    width: 100%;
    height: 500px;
  }

  .sec {
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
  }
  .sec img {
    width: 120px;
    height: 120px;
  }

  .sec h1 {
    color: #800020;
    text-align: center;
    font: 700 65px/97.5px "Fuzzy Bubbles", sans-serif;
    text-transform: uppercase;
    position: relative;

    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section--1 {
    max-width: 1920px;
    height: 460px;
    background: #0d0b06;
    color: white;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    clip-path: polygon(0 0, 99% 8%, 100% 91%, 0 98%);
  }

  .section--1 center {
    max-width: 1000px;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    padding-top: 100px;
    margin: 0 auto;
    text-align: left;
  }

  .section--2 {
    display: flex;
    max-width: 1920px;
    padding: 199px 200px 200px 200px;
    justify-content: center;
    align-items: flex-start;
    background: #fff;
  }

  center {
    display: flex;
    gap: 50px;
  }

  .section--2-head {
    color: #01263d;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 56px;
    font-style: normal;
    font-weight: 900;
    line-height: 64px;
    text-align: left;
  }

  .section--2 span {
    display: flex;
    max-width: 400px;
    flex-direction: column;
    align-items: center;
    // gap: -0.2px;
    // flex-shrink: 0;
    text-align: left;
    margin-left: 30px;

    color: #000615;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
  }

  @media (max-width: 769px) {
    .sec {
      position: relative;
      display: flex;
      flex-direction: column;
    }

    .logo1 {
      position: absolute;
      top: 50px;
      left: 40px;
      width: 120px;
      height: 120px;
    }
    .logo2 {
      position: absolute;
      top: 50px;
      right: 40px;
      width: 120px;
      height: 120px;
    }

    .sec h1 {
      position: absolute;
      top: 150px;
      font-size: 45px;
      text-align: center;
    }

    center {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .section--1 {
      height: 600px;
      padding-left: 10px;
    }
    .section--2 {
      padding: 0;
    }

    .section--2-head {
      font-size: 45px;
    }

    .section--2 span {
      font-family: "Baloo Bhai", sans-serif;
      padding-bottom: 50px;
    }
  }
`;
