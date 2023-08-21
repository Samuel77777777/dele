import { styled } from "styled-components";
// import Navbar from "./Navbar";

const Contact = () => {
  return (
    <Div>
      <div className="section">
        <div className="pseudo"></div>
        <div className="div-elementor-background-overlay"></div>

        <div className="heading-1">
          <img src="logo2.png" alt="" className="pic1" />
          <div className="contact-us">Contact Us</div>
          <img
            className="link-william-k-moore-elementary-logo-120-x-120-png"
            src="logo1.png"
          />
        </div>
      </div>
    </Div>
  );
};

export default Contact;

const Div = styled.div`
  //   .header {
  //     background: linear-gradient(
  //         1.52deg,
  //         rgba(255, 255, 255, 0.6) 4.349188134074211%,
  //         rgba(255, 255, 255, 0.6) 10.000000149011612%,
  //         rgba(0, 0, 0, 0) 48.68757426738739%
  //       ),
  //       linear-gradient(
  //         205.83deg,
  //         rgba(1, 38, 61, 1) 0%,
  //         rgba(0, 0, 0, 0) 40.00000059604645%
  //       );
  //   }

  .section,
  .section * {
    box-sizing: border-box;
  }
  .section {
    padding: 300px 747.44px 300px 747.42px;
    display: flex;
    flex-direction: row;
    gap: 0px;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
  }
  .pseudo {
    background: linear-gradient(
      180deg,
      rgba(1, 38, 61, 1) 10.000000149011612%,
      rgba(0, 0, 0, 0) 100%
    );
    flex-shrink: 0;
    position: absolute;
    right: 0px;
    left: 0px;
    bottom: -0.5px;
    top: 0px;
  }
  .div-elementor-background-overlay {
    background: linear-gradient(
        1.52deg,
        rgba(255, 255, 255, 0.6) 4.349188134074211%,
        rgba(255, 255, 255, 0.6) 10.000000149011612%,
        rgba(0, 0, 0, 0) 48.68757426738739%
      ),
      linear-gradient(
        205.83deg,
        rgba(1, 38, 61, 1) 0%,
        rgba(0, 0, 0, 0) 40.00000059604645%
      );
    flex-shrink: 0;
    position: absolute;
    right: 0px;
    left: 0px;
    bottom: -0.5px;
    top: 0px;
  }
  .heading-1 {
    border-style: solid;
    border-color: #70ff00;
    border-width: 0px 0px 2px 0px;
    flex-shrink: 0;
    width: 425.14px;
    height: 99.5px;
    display: flex;
  }
  .contact-us {
    color: #70ff00;
    text-align: center;
    font: 700 65px/97.5px "Fuzzy Bubbles", sans-serif;
    text-transform: uppercase;
    position: absolute;
  ``  left: calc(50% - 223.99px);
    top: 9px;``
    width: 449px;
    height: 78px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link-william-k-moore-elementary-logo-120-x-120-png {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    position: absolute;
    left: 1279px;
    top: 279.5px;
  }
`;
