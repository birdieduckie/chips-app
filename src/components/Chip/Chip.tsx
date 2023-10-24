import { useRef, useLayoutEffect, useEffect, useState } from "react";

import { Button } from "./styled";

interface ChipProps {
  text: string;
  onResize?: (arg0: any) => void;
}
export const Chip = ({ text, onResize }: ChipProps) => {
  const chipRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (chipRef.current) {
      console.log(chipRef.current.clientWidth);
      onResize && onResize(chipRef.current.clientWidth + 5);
    }
  }, []);

  return (
    <Button ref={chipRef} variant="chips">
      {text}
    </Button>
  );
};
