import styled from "styled-components";
import { Color, media } from "./device";
export const Text = styled.p`
  color: ${(p) => p.color || Color.Font};
  font-size: ${(p) => p.fontSize};
  font-weight: ${(p) => p.fontWeight || 400};
  margin: ${(p) => p.margin || "0px"};
  padding: 0px;
  text-align: ${(p) => p.textalign};
  margin-top: ${(p) => p.mtop};
  background-color: ${(p) => p.bgColor};
  width: ${(p) => p.width || "none"};
  border-radius: ${(p) => p.borderrad};
  ${media.phone`
  font-size: ${(p) => p.phonefontSize};
  margin-top: ${(p) => p.phonemtop};
  
  
  `}
`;
