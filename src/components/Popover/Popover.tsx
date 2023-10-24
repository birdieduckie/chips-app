import { _Container as Container } from "./styled";

interface PopoverProps {
  children?: any;
}

export const Popover = ({ children }: PopoverProps) => {
  return (
    <Container>
      {children}
      <span>я поповер</span>
    </Container>
  );
};
