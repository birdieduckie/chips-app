import { _Container as Container } from "./styled";

interface PopoverProps {
  children?: any;
}

export const Popover = ({ children }: PopoverProps) => {
  return <Container>{children}</Container>;
};
