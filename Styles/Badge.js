import styled from "styled-components";
import Image from "next/image";
import { Color } from "./device";
import { media } from "./device";

export const Bagdes = styled.div`
  background-color: ${(p) => p.bgColor || Color.Primary};
  width: ${(p) => p.width || "auto"};
  border-radius: 3px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  display: flex;
  list-style: none;
  padding: 5px;
  margin: 13px;
  font-weight: 300;
  box-shadow: 6px -6px 15px -1px rgba(208, 206, 206, 0.74);

  ${media.phone`
    margin:5px
  `}
`;

export const StyleImage = styled(Image)`
  border-radius: 10px;
  max-width: 500px; /*actual image width*/
  height: auto; /* maintain aspect ratio*/
  margin: auto; /*optional centering of image*/

  ${media.phone`
  margin-top:${(p) => p.phonemt || "-100px"}

  
  `}
`;
