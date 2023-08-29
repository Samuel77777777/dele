import { styled } from "styled-components";

const Footer = () => {
  return (
    <Div>
      <div className="foot1">
        <img src="logo2.png" alt="" />

        <div className="contact">
          <h1 className="contact-head">Contact Us</h1>

          <div className="sec1">
            <p>
              <span className="sp1"> Office Hours </span> <br />
              <span className=""> OPEN TO PARENT & GUEST </span> <br />
              Mondays- Thursday 8:45am - 3:00pm <br />
              Fridays:8:45am -2:30pm <br /> <br />
              Pupils HOURS <br />
              Mondays-Thursday 7:00am - 3:30pm <br />
              Friday 7:00 - 2:30pm
            </p>
          </div>

          <div className="sec3">
            <p>
              phone : 232 99 005 251 <br />
              deleprepschool@yahoo.co.uk <br />
              Location <br />
              Reservation View, Allen Town (Old Road)
            </p>
          </div>
        </div>
        <img src="logo1.png" alt="" />
      </div>

      <div className="foot2">
        <p>
          Copyright © 2023 Dele Preparatory School & Dele Peddle International
          High School | Powered by Peculiar Labs
        </p>
      </div>
    </Div>
  );
};

export default Footer;

const Div = styled.div`
  .foot1 {
    background: linear-gradient(
        180deg,
        #01263d 0%,
        rgba(1, 38, 61, 0.93) 50%,
        #000615 100%
      ),
      url("footer.png");
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;
  }

  .foot1 img {
    width: 250px;
    height: 250px;
  }

  .contact {
    display: flex;
    width: 366px;
    height: 567px;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    text-align: center;
    color: #faff00;
  }

  .contact-head {
    color: #faff00;
    text-align: center;
    font-family: "Baloo Bhai 2", cursive;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    letter-spacing: 2.5px;
  }
  .sec1 {
    color: #faff00;
    text-align: center;
    font-family: "Baloo Bhai 2", cursive;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
  }

  .sp1 {
    color: #faff00;
    text-align: center;
    font-family: "Baloo Bhai 2", cursive;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
    margin-bottom: 5px;
  }

  .sec3 {
    color: #faff00;
    text-align: center;
    font-family: "Baloo Bhai 2", cursive;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
  }

  .foot2 {
    display: flex;
    max-width: 1920px;
    min-height: 80px;
    // padding: 24.6px 360px 25.6px 360px;
    justify-content: center;
    background: #000615;
  }
  .foot2 p {
    color: #c2d3fe;
    text-align: center;
    font-family: "Baloo Bhai 2", cursive;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28.8px;
  }

  @media (max-width: 768px) {
    .foot1 img {
      display: none;
    }
    .foot2 {
      padding: 0;
    }
  }
`;
