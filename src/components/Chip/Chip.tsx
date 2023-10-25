import { useRef, useLayoutEffect, useEffect, useState } from "react";

import { Button } from "./styled";

interface ChipProps {
  text: string;
  onResize?: (arg0: any) => void;
  onClick: (arg0: string) => void;
  selected: boolean;
}
export const Chip = ({ selected, text, onResize, onClick }: ChipProps) => {
  const chipRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => onClick(text);

  useLayoutEffect(() => {
    if (chipRef.current) {
      console.log(chipRef.current.clientWidth);
      onResize && onResize(chipRef.current.clientWidth + 5);
    }
  }, []);

  return (
    <Button
      ref={chipRef}
      variant="chips"
      onClick={handleClick}
      selected={selected}
    >
      {text}
    </Button>
  );
};
