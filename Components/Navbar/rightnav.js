import React from "react";
import styled from "styled-components";
import { media, Color } from "../../Styles/device";

const Menu = styled.ul`
  z-index: 0;
  display: flex;
  list-style: none;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    color: ${(p) => p.collor || Color.Primary};
    cursor: pointer;
    margin-left: 15px;
    &:hover {
      color: ${(p) => p.hoverColor || Color.Secondary};
    }
  }
  width: 100%;
  ${media.phone`
     flex-flow : column nowrap;
     background : ${Color.Primary};
     top : 0;
     right : 0 ;
     height : auto;
     position: fixed;
     padding-top: 3.5rem;
     margin-top:-10px;
     text-align : center;
     color : white;
     transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
     transition: transform 0.3s ease-in-out;
    box-shadow :  0px 4px 19px rgba(255, 98, 32, 0.24);
     li{
       padding : 20px;
       color : #fff
 
     }

  `}
`;

const RightNav = ({ open }) => {
  return (
    <Menu open={open}>
      <li>BERANDA</li>
      <li>LAYANAN</li>
      <li>PORTOFOLIO</li>
      <li>BLOG</li>
    </Menu>
  );
};

export default RightNav;
