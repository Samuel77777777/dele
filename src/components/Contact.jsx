import { styled } from "styled-components";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxlwb2r",
        "template_h79nvdp",
        form.current,
        "TaU9DMKtKq15KlZ6w"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setShowAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Div>
      {/* hero section starts here */}
      <div className="section">
        <div className="head">
          <Navbar />
          <br /> <br />
          <div className="sec">
            <img src="logo1.png" alt="" className="logo1" />

            <h1>
              Contact Us <hr />
            </h1>

            <img src="logo2.png" alt="" className="logo2" />
          </div>
        </div>
      </div>

      {/* hero section ends here */}

      {/* the main contact container */}
      {/* get in touch section start here */}
      <div className="contact-me">
        <div className="get-in-touch">
          <h1>Get In Touch</h1>

          <h3 className="wise">
            {" "}
            ``Through high expectations and a positive learning environment, the
            school, parents and community are responsible partners in the
            educational and social growth of its students.``
          </h3>

          <div className="number">
            <h2>Number</h2>

            <p className="icon-text">
              <FontAwesomeIcon icon={faPhone} />
              <span>+232 99 005 251 </span>
            </p>

            <p>
              deleprepschool@yahoo.co.uk <br />
              Mrs Eudora Francess Browne: Proprietress <br />
              Miss Christie M. Browne: Director of Administration <br />
              Mr Ayodele Browne: Director of Administration
            </p>
          </div>

          <h2>Location</h2>
          <p className="icon-text">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Reservation View, Allen Town (Old Road) </span>
          </p>

          <h2>Office Hours</h2>

          <p className="las">
            {" "}
            OPEN TO PARENTS & GUESTS <br />
            Mondays - Thursdays 8:45am - 3:00pm <br />
            Fridays 8:45am - 2:30pm <br /> <br />
            PUPILS HOURS <br />
            Mondays - Thursdays 7:00am - 3:30pm <br />
            Fridays 7:00 - 2:30pm
          </p>
        </div>

        {/* get in touch section end here */}

        {/* form section starts here */}
        <div className="form">
          {showAlert && (
            <div className="success-alert">Email Sent Successfully </div>
          )}

          <h1>Send Us a Message</h1>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="user_name" required />
            <input type="tel" placeholder="Phone" name="user_phone" required />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              name="message"
              id=""
              cols="60"
              rows="10"
              required
            ></textarea>
            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* form section ends here */}

      {/* map section start here */}
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d7892.448472327897!2d-13.235076057286763!3d8.477564077895645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0xf04c3a83ee08c83%3A0x540553ae55e4914d!2sAllen%20St%2C%20Freetown!3m2!1d8.477553499999999!2d-13.2299262!4m0!5e0!3m2!1sen!2ssl!4v1692668547336!5m2!1sen!2ssl"></iframe>
      </div>

      {/* map section end here */}

      <Footer />
    </Div>
  );
};

export default Contact;

const Div = styled.div`
  .section {
    background: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(255, 255, 255, 0.9) 100%
      ),
      url("Main.png"), lightgray 0px -369.456px / 100% 205.861% no-repeat;
    height: 500px;
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
    font: 700 65px "Fuzzy Bubbles", sans-serif;
    text-transform: uppercase;
    position: relative;
    // width: 40px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;

    // webkit-text-fill-color: white;
    // -webkit-text-stroke-width: 1px;
    // -webkit-text-stroke-color: white;
  }

  .contact-me {
    display: flex;
    gap: 50px;
    padding: 100px 150px 199.39px 150px;
    justify-content: center;
    background: black;
    color: white;
  }

  .icon-text {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .get-in-touch {
    display: flex;
    max-width: 570px;
    flex-direction: column;
    align-items: flex-start;
  }

  .get-in-touch h1 {
    color: #fff;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
  }

  .wise {
    color: #fff;
    font: 700 18px/24px "Baloo Bhai 2", sans-serif;
  }

  h2 {
    color: #fff;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 42px;
    letter-spacing: 2.5px;
  }

  p {
    color: #fff;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
  }

  .las {
    color: #faff00;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
  }

  .form form {
    display: flex;
    flex-direction: column;
  }
  .form h1 {
    color: #fff;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
  }
  form input {
    padding: 15px 13px 16px 13px;
    border-radius: 2px;
    border: 1px solid #ddd;
    background: #fafafa;
    color: #757575;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
  }

  button {
    padding: 17px 42.27px 19px 43px;
    border: 2px solid #bc1d2c;
    background: #fff;
    width: 144.24px;
    color: #bc1d2c;
    text-align: center;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .map {
    display: flex;
    width: 1920px;
    max-width: 1920px;
    align-items: flex-start;
  }

  iframe {
    width: 100%;
    height: 489px;
  }
  .footer1 {
    color: #800020;
  }

  .sec1-text {
    color: #800020;
  }
  .sec3 {
    color: #800020;
  }

  .success-alert {
    background-color: #228b22;
    color: white;
    padding: 10px;
    text-align: center;
    margin-bottom: 10px;
    font-family: "Baloo Bhai 2", sans-serif;
  }

  @media (max-width: 768px) {
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
    }

    overflow: hidden;

    .contact-me {
      display: flex;
      flex-direction: column;
      padding: 10px;
    }
    iframe {
    }
  }
`;
