import { motion } from "framer-motion";
import styled from "styled-components";
import { media, Color } from "./device";

export const WrapperBox = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: ${(p) => p.mtop};
  justify-content: ${(p) => p.jcontent || "center"};
  ${media.phone`
     justify-content: flex-start;
  `}
`;

export const BOX = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 180px;
  box-shadow: 9px 12px 15px rgba(0, 0, 0, 0.02);
  padding: 15px;
  cursor: pointer;
  margin: 20px;
  border-radius: 5px;
  transition: all 0.6s ease-in-out;
  color: ${Color.Font};
  .judul {
    text-align: center;
    font-weight: 500;
  }

  .desc {
    text-align: center;
    font-weight: 300;
  }

  .wrapimage {
    margin: auto;
    width: 40px;
  }

  &:hover {
    /* transform: scale(1.1); */
    box-shadow: -9px -1px 46px rgba(0, 0, 0, 0.08),
      9px 12px 15px rgba(0, 0, 0, 0.02);
  }

  ${media.phone`
    .judul , .desc{
       text-align: left;
    }
    .wrapimage {
      width: 100%;
    }
     height: 170px;
     width : 450px;
     padding: 10px;
  `}
`;

export const WrapList = styled.ul`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const List = styled.li`
  display: flex;
  margin: 5px;
  list-style: none;
  align-items: flex-start;
  justify-content: space-between;
  .section1 {
    width: 30px;
    position: absolute;
    left: 0;
    height: 30px;
    padding: 6px 10px;
  }

  .section2 {
    display: flex;
    flex-direction: column;
  }

  .bullet {
    width: 20px;
    height: 20px;
    background: #ff6623;
    box-shadow: -3px -1px 10px rgba(227, 208, 208, 0.25),
      0px 4px 4px rgba(0, 0, 0, 0.06);
    border-radius: 6px;
  }
  .header {
    font-size: 13pt;
    font-weight: 500;
    color: ${Color.Primary};
  }
  .deskripsi {
    font-size: 11pt;
    width: 600px;
    ${media.phone`
      width : 350px;
    `}
  }
`;
