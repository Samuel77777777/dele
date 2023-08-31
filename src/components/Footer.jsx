import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Div>
      {/* i have two section for the footer and it starts here with the first section called footer1 */}
      <footer className="footer1">
        <img src="logo2.png" alt="" className="logo11" />

        <div className="contact">
          <h1 className="contact-head">Contact Us</h1>

          <div className="sec3">
            <p>
              <FontAwesomeIcon icon={faPhone} /> : 232 99 005 251 <br />
              deleprepschool@yahoo.co.uk <br />
              Location <br />
              Reservation View, Allen Town (Old Road)
            </p>
          </div>
        </div>
        <img src="logo1.png" alt="" className="logo12" />
      </footer>
      {/* footer1 section ends here */}

      {/* footer2 section start here */}
      <div className="footer2">
        <p>
          Copyright © 2023 Dele Preparatory School & Dele Peddle International
          High School | Powered by Peculiar Labs
        </p>
      </div>

      {/* end of footer */}
    </Div>
  );
};

export default Footer;

const Div = styled.div`
  .footer1 {
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.9) 0%,
        rgba(1, 38, 61, 0.84) 140.26%,
        rgba(0, 6, 21, 0.9) 0%
      ),
      url("footer.png"), lightgray 0px -369.456px / 100% 205.861% no-repeat;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }

  .logo11 {
    width: 208px;
    height: 209px;
  }
  .logo12 {
    width: 208px;
    height: 209px;
  }

  .contact {
    display: flex;

    flex-direction: column;
    align-items: center;
    gap: 25px;
    text-align: center;
    color: #800020;
  }

  .contact-head {
    color: #800020;
    text-align: center;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 2.5px;
  }
  // .sec1 {
  //   color: #800020;
  //   text-align: center;
  //   font-family: "Baloo Bhai 2", sans-serif;
  //   font-size: 20px;
  //   font-style: normal;
  //   font-weight: 600;
  //   line-height: 28.8px;
  // }

  .sec1-text {
    color: #800020;
    text-align: center;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28.8px;
    margin-bottom: 5px;
  }

  .sec3 {
    color: #800020;
    text-align: center;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 28.8px;
  }

  .footer2 {
    display: flex;
    max-width: 1920px;
    min-height: 80px;
    // padding: 24.6px 360px 25.6px 360px;
    justify-content: center;
    background: #000615;
  }
  .footer2 p {
    color: #c2d3fe;
    text-align: center;
    font-family: "Baloo Bhai 2", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
  }

  @media (max-width: 768px) {
    .footer2 {
      padding: 0;
    }

    .footer1 {
      display: flex;
      flex-direction: column;
      position: relative;
      height: 700px;
    }

    .logo11 {
      width: 70px;
      height: 70px;
      right: 20px;
      top: 40px;
      object-fit: cover;
      position: absolute;
    }

    .logo12 {
      left: 20px;
      width: 70px;
      height: 70px;
      top: 40px;
      object-fit: cover;
      position: absolute;
    }
  }
`;
