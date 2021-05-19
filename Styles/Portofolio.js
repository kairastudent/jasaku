import styled from "styled-components";
import { media } from "./device";

export const GalleryPortofolio = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px;
`;

export const ListPortofolio = styled.div`
  margin: 10px;
  box-shadow: 9px 12px 15px rgba(0, 0, 0, 0.02);
  cursor: pointer;
  background-color: #ffff;
  width: 350px;
  height: 200px;
  position: relative;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 5px;
  overflow: hidden;
  &:hover {
    .description {
      height: 0em;
    }
    .image {
      height: 18em;
    }
  }
  .image {
    height: 7em;
    width: 99%;
    position: Absolute;
    top: 0px;
    -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .description {
    height: 4em;
    font-size: 11pt;
    position: absolute;
    bottom: 0em;
    padding: 5px;
    -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    text-align: center;
  }
  ${media.phone`
width: 97%;
  `}
`;
