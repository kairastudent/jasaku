import { css } from "styled-components";
const size = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export const Color = {
  Font: "#1B0A03",
  Primary: "#FF6824",
  Secondary: "#A94D23",
};

export const media = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
