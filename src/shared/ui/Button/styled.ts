import styled, { css } from "styled-components";

import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  width: 110px;
  padding: 12px 16px;
  border: 0;
  border-radius: 15px;
  color: #e1ebee;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  cursor: pointer;
  //overflow: hidden;
  //text-overflow: ellipsis;
  ${(p) =>
    p.variant === "chips" &&
    css`
      background: #c1d0b5;
      color: #2c3e2c;
      &:hover {
        color: black;
      }
      &:active {
        color: #fff8de;
      }
      &:disabled {
        color: #8f97a3;
      }
    `};
  ${(p) =>
    p.selected &&
    css`
      background: #1b6ab8;
      color: white;
      &:hover {
        color: #d1e6f0;
      }
    `};
  ${(p) =>
    p.variant === "selected" &&
    css`
      background: #c1d0b5;
      color: #2c3e2c;
      width: 65px;
    `}
`;
