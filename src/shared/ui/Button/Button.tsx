import React, { FC, forwardRef } from "react";

import { StyledButton } from "./styled";

export interface ButtonProps {
  variant?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: any;
  className?: any;
  ref?: any;
}

export const Button: FC<ButtonProps> = forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        className={props.className}
        variant={props.variant}
        onClick={props.onClick}
      >
        {children}
      </StyledButton>
    );
  },
);
