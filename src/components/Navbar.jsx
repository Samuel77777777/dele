import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Div>
      <nav>
        <ul>
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link className="link">Academics </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </ul>

        <div className="sid">
          <div onClick={handleSidebarToggle} className="side">
            <FontAwesomeIcon
              icon={showSidebar ? faTimes : faBars}
              color="white"
              className="icon"
            />
          </div>

          {showSidebar && <Sidebar />}
        </div>
      </nav>
    </Div>
  );
};

export default Navbar;

const Div = styled.div`
  ul {
    display: flex;
    max-width: 1155px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .link {
    color: #faff00;
    font-family: "Baloo Bhai 2", cursive;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 70px;

    list-style: none;
    margin: 10px;
    padding: 10px;
    outline: none;
    background: transparent;
    cursor: pointer;
    text-decoration: none;
  }

  .side {
    display: none;
  }

  @media (max-width: 768px) {
    ul {
      display: none;
    }

    li {
      display: none;
    }

    .side {
      display: block;
      text-align: right;
      margin-right: 5px;
      padding: 10px;
    }

    .icon {
      font-size: 30px;
    }
  }
`;
