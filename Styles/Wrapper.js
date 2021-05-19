import styled from "styled-components";
import { media } from "./device";
import { motion } from "framer-motion";
export const FlexContainer = styled.div`
  background: ${(p) => p.background};
  flex-direction: ${(p) => p.flexDir};
  width: ${(p) => p.lebar};
  position: ${(p) => p.position};
  z-index: ${(p) => p.zindex};
  overflow: ${(p) => p.overflow || "hidden"};
  display: flex;
  margin-left: ${(p) => p.marginLeft || "0px"};
  height: ${(p) => p.height || "100vh"};
  flex-wrap: ${(p) => p.wrap};
  justify-content: ${(p) => p.jcontent};
  align-items: ${(p) => p.aitem};
  margin-top: ${(p) => p.mtop || "0px"};
  padding: ${(p) => p.padding};
  box-shadow: ${(p) => p.shadow && "10px 10px 25px -30px #080c21"};
  border: ${(p) => p.border};
  ${media.phone`
    flex-direction : ${(p) => p.phoneFlexDir || "row"};
    width :${(p) => p.wiphone || "100%"};
    margin-right: ${(p) => p.phone_mr};
    margin-top: ${(p) => p.phonemtop || "0px"};

    flex-wrap: wrap;
  `}
`;

export const FlexRow = styled(motion.div)`
  display: ${(p) => p.display || "block"};
  position: ${(p) => p.position};
  overflow: ${(p) => p.overflow};
  z-index: ${(p) => p.zindex};
  align-self: ${(p) => p.aself};
  flex-grow: ${(p) => p.fgrow};
  border-top: ${(p) => p.bt};
  text-align: ${(p) => p.ta};
  border: ${(p) => p.border};
  width: ${(p) => (p.size / 12) * 100}vw;
  height: ${(p) => p.height};
  margin: ${(p) => p.margin};
  background-color: ${(p) => p.primary};
  padding: ${(p) => p.padding};
  margin-right: ${(p) => p.mright};
  margin-top: ${(p) => p.mtop};
  margin-bottom: ${(p) => p.mbottom};
  color: ${(p) => p.color || "none"};
  font-size: ${(p) => p.fontSize};
  border-radius: ${(p) => p.bradius || "3px"};
  box-shadow: ${(p) => p.shadow && "10px 10px 25px -30px #080c21"};
  ${media.phone`
  order: ${(p) => p.phoneOrder};
    width :${(p) => p.wiphone || "100%"};
    margin-right: ${(p) => p.phone_mr};
    font-size:${(p) => p.phonefontSize};
    margin-top: ${(p) => p.phonemtop || "0px"};
  `}
`;

export const Blob = styled.div`
  position: absolute;
  top: -35%;
  right: -200px;
  z-index: -10;
  ${media.phone`
  top: -20%;
  right: -180px;
`};
`;
