import styled from "styled-components";
import { Color } from "./device";
// Radio Group
export const RadioGroup = styled.div`
  display: flex;

  div {
    border-radius: 7px;
    margin: 5px;
    background-color: #fff;
    text-align: center;
  }
`;

//LabelRadio
export const LabelRadio = styled.label`
  color: black;
  display: inline-block;
  cursor: pointer;
  line-height: 1.6;
  font-size: 11pt;
  padding: 4px 10px;
`;

//radio type
export const RadioType = styled.input.attrs({
  type: "radio",
})`
  cursor: pointer;
  position: absolute;
  visibility: hidden;
  display: none;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:checked + ${LabelRadio} {
    color: white;
    background-color: ${Color.Primary};
    font-weight: 500;
    border-radius: 7px;
  }
`;
