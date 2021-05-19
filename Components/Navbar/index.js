import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Burger from "./burger";
import { StyleImage } from "../../Styles/Badge";

const Nav = styled.nav`
  z-index: 5;
  position: fixed;
  width: 100%;
  background-color: ${({ bgColor }) => (bgColor ? "#fff" : "none")};
  height: 55px;
  box-shadow: ${({ bgColor }) =>
    bgColor ? "0px 4px 19px rgba(225, 218, 218, 0.25)" : "none"};
  padding: 0 20px;
  align-items: center;
  transition: all 0.3s linear;
  display: flex;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);
  const changeBgNav = () => {
    if (typeof window !== "undefined") {
      window.scrollY >= 40 ? setBgColor(true) : setBgColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBgNav);
    return () => {
      window.removeEventListener("scroll", changeBgNav);
    };
  }, [bgColor]);

  return (
    <Nav bgColor={bgColor}>
      <div className="logo">
        <StyleImage
          src="/log.svg"
          width="80px"
          height="50px"
          alt="Logo JASAKU"
        />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
