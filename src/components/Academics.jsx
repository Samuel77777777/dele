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
            <img src="logo2.png" alt="" className="logo1" />

            <h1 className="">
              Academics
              <hr />
            </h1>

            <img src="logo1.png" alt="" className="logo2" />
          </div>
        </div>
      </div>

      {/* hero section ends here */}

      {/* i just have two sections for this page and section1 start here */}

      <main>
        <div className="section--1">
          <center>
            Dele Preparatory School and Dele Peddle International High School
            will be embracing, teaching about, <br /> modeling and expecting the
            following CORE <br /> VALUES to be infused throughout the building.{" "}
            <br /> Please help us model & teach these from home! It takes a
            village to raise a child! Let’s work to strengthen our village!.
          </center>
        </div>

        {/* section1 end here  */}

        {/* the main section starts here */}
        <section>
          <h1>Academic Calendar</h1>
          <div className="start">
            <p>Dele Preparatory & Dele - Peddle</p>
            <p>Internation High School Allen Town</p>
            <p>1st (Term) Calendar of event</p>
          </div>

          <div className="table">
            <table className="custom-table">
              <thead>
                <tr>
                  <th className="thead">Event</th>
                  <th className="thead">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="td">Reopen</td>
                  <td className="td">
                    4<span className="date">th</span> September 2023
                  </td>
                </tr>
                <tr>
                  <td className="td">Meeting Jss</td>
                  <td className="td">
                    1<span className="date">st</span> October 2023
                  </td>
                </tr>
                <tr>
                  <td className="td">
                    First Term Exam: <br />
                    <span className="right"> Reception to Prep 3</span> <br />
                    <span className="right">Prep 4 to ss2</span> <br />
                  </td>
                  <td className="td">
                    <span className="none"> Column 2, Row 3</span> <br />
                    <span className="left">
                      27<span className="date">th</span> November 2023
                    </span>{" "}
                    <br />
                    <spa className="left">
                      4<span className="date">th</span> December 2023
                    </spa>
                  </td>
                </tr>
                <tr>
                  <td className="td">Field Trip</td>
                  <td className="td">To be determined</td>
                </tr>
                <tr>
                  <td className="td">Nine Lesson & Carol</td>
                  <td className="td">
                    17<span className="date">th</span> December 2023
                  </td>
                </tr>
                <tr>
                  <td className="td">Close Down</td>
                  <td className="td">
                    17<span className="date">th</span> December 2023
                  </td>
                </tr>
                <tr>
                  <td className="td">Reopen</td>
                  <td className="td">
                    8<span className="date">th</span> January 2024
                  </td>
                </tr>
                <tr>
                  <td className="td">Report Card Collection</td>
                  <td className="td">
                    14<span className="date">th</span> January 2024
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="letter">
              <p>Dear Parent,</p>
              <p className="letter-body">
                This is just to give you insight into what will be happening
                during the Term. Please note that events may change. Please see
                that your child or chldren study everyday i.e Read Timetables,
                and spelling and do homework properly.
              </p>{" "}
              <br />
              <p>
                All Meetings and Report Card collection are strictly for parent
                and official Guardians. <br /> <br /> Please note that events
                written are subject to change.
              </p>{" "}
              <h4 className="h4">Remember They are yours</h4>
            </div>

            <div className="pdf">
              <a href="dele.pdf" download="dele.pdf" className="pdf">
                <img src="pdf.png" alt="" />
              </a>
            </div>
          </div>
        </section>

        {/* section2 starts here */}
        <div className="section--2">
          <center>
            <h1 className="section--2-head">Performance Plans</h1>
            <span>
              Be humble (Conscientious) <br />
              Congratulate and uplift other (cooperation) <br />
              Find solutions, not excuses (Honetly) <br />
              Always say excuse me, please, and thank you (Respect) <br />
              Mistakes are stepping stones for success (confindence) <br />
              Always come to class prepared to learn (Integrity) <br />
              Be an active listener (Empathy) <br />
              Practice makes progress (Perserverance) <br />
              Be a Dynamic greeter (Kindness)
            </span>
          </center>
        </div>
      </main>
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
    background: #000;
    color: white;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    clip-path: polygon(0 1%, 99% 9%, 99% 86%, 0% 100%);
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
    background: #000;
    clip-path: polygon(0 14%, 99% 0, 100% 100%, 0 90%);
  }

  center {
    display: flex;
    gap: 50px;
  }

  .section--2-head {
    color: #fff;
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

    color: #fff;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28.8px;
  }

  main {
    // background-color: black;
  }
  section {
    background-color: white;
  }

  section h1 {
    color: #800020;
    font-family: "Fuzzy Bubbles", sans-serif;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
    margin-top: 50px;
    text-align: center;
  }
  .start {
    text-align: center;
    font-family: "Fuzzy Bubbles", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 550;
    text-transform: uppercase;
  }

  .custom-table {
    max-width: 800px;
    border-collapse: collapse;
    text-align: center;

    margin: 0 auto;
    justify-content: center;
  }

  .td {
    padding: 8px;
    text-align: center;
    border: 2px solid rgb(46, 35, 35);
    text-align: left;

    font-family: "Fuzzy Bubbles", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
  }

  .thead {
    padding: 10px;
    text-align: center;
    border: 2px solid rgb(46, 35, 35);
    text-align: center;

    font-family: "Fuzzy Bubbles", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 550;
    text-transform: uppercase;
  }

  .right {
    text-align: right;

    margin-left: 170px;

    font-family: Fuzzy Bubbles;
    font-style: normal;
  }

  .none {
    display: none;
  }

  .left {
    margin-right: 170px;
  }

  .letter {
    margin: 50px auto 0px auto;

    max-width: 800px;

    font-family: "Fuzzy Bubbles", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
  .letter-body {
    font-family: "Fuzzy Bubbles", sans-serijf;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 30px;
  }

  .h4 {
    text-align: center;
    font-weigt: bold;
    font-size: 27px;
  }

  .pdf {
    text-align: center;
    width: 138px;
    height: 138px;
    margin: 0 auto;
    cursor: pointer;
  }

  .date {
    content: attr(data-suffix);
    font-size: 70%;
    vertical-align: super;
    margin: 0;
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
      clip-path: polygon(0 5%, 99% 0, 100% 100%, 0 90%);
    }

    .section--2-head {
      font-size: 35px;
      margin-bottom: 20px;
    }

    .section--2 span {
      font-family: "Baloo Bhai", sans-serif;
      padding-bottom: 50px;
    }

    .custom-table {
      max-width: 100%;
      border-collapse: collapse;
      text-align: center;

      margin: 0 auto;
      justify-content: center;
    }

    .td {
      padding: 5px;
      text-align: center;
      border: 2px solid rgb(46, 35, 35);
      text-align: left;

      font-family: "Fuzzy Bubbles", sans-serif;
      font-size: 15px;
      font-style: normal;
      font-weight: 600;
      text-transform: uppercase;
    }
    .left {
      margin-right: 40px;
    }
    .right {
      margin-left: 40px;
    }
  }
`;
