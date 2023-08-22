import { styled } from "styled-components";

const Navbar = () => {
  return (
    <Div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Academics</li>
          <li>Contact</li>
        </ul>
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
  li {
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
  }
`;
