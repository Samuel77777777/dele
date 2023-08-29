// import React from 'react';
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Div>
      <aside className="side">
        <ol className="side-list">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/academics" className="link">
            Academics
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </ol>
      </aside>
    </Div>
  );
};

export default Sidebar;

const Div = styled.div`
  position: relative;
  color: black;

  aside {
    margin-bottom: 400px;
    background: linear-gradient(0deg, #fff 0%, #01263d 100%);
    width: 350px;
    height: 100vh;
    right: 0%;
    box-shadow: 10px -5px 47px 0px rgba(0, 0, 0, 0);
    animation: myAnim 2s ease 0s 1 normal forwards;

    .side-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      padding-top: 0px;
      align-items: center;
    }

    .link {
      color: #faff00;
      font-family: "Baloo Bhai 2", cursive;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      text-decoration: none;
      list-style: none;
      margin: 10px;
      padding: 10px;
      outline: none;
      background: transparent;
      cursor: pointer;
    }

    @keyframes myAnim {
      0% {
        opacity: 0;
        transform: translateX(50px);
      }

      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;
