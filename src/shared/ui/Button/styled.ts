import styled, { css } from "styled-components";

import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  max-height: 110px;
  width: 110px;
  padding: 12px 16px;
  border: 0;
  border-radius: 15px;
  color: #e1ebee;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  cursor: pointer;

  ${(p) =>
    p.variant === "primary" &&
    css`
      background: #4375f8;
      &:hover {
        background: #2156e4;
      }
      &:active {
        background: #2156e4;
        color: #90abf1;
      }
      &:disabled {
        background: #dedee3;
      }
    `};

  ${(p) =>
    p.variant === "danger" &&
    css`
      background: #f9674e;
      &:hover {
        background: #f45034;
      }
      &:active {
        background: #f45034;
        color: #f9a799;
      }
      &:disabled {
        background: #fab4a8;
      }
    `};

  ${(p) =>
    p.variant === "chips" &&
    css`
      background: #c1d0b5;
      color: #2c3e2c;
      &:hover {
        color: red;
      }
      &:active {
        color: #737d8c;
      }
      &:disabled {
        color: #8f97a3;
      }
    `};
  ${(p) =>
    p.variant === "showMore" &&
    css`
      background: #c1d0b5;
      color: #2c3e2c;
      width: 65px;
    `}
`;
