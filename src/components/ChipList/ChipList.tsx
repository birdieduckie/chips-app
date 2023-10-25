import { useLayoutEffect, useRef, useState, useEffect } from "react";

import { mockChips } from "../mockChips";
import { Chip } from "../Chip/Chip";
import { ChipWrapper, _Container as Container } from "./styled";
import { Header } from "../../screens/Main/styled";
import { Button } from "../Chip/styled";
import { Popover } from "../Popover/Popover";

export const ChipList = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const [listWidth, setListWidth] = useState(0);
  const [chipWidth, setChipWidth] = useState(0);
  const [selectedChip, setSelectedChip] = useState("");
  const [isShown, setIsShown] = useState(false);

  const calcAvailableItems = Math.floor(listWidth / chipWidth);
  const countedChips = mockChips.slice(0, calcAvailableItems);
  const remainChips = mockChips.slice(calcAvailableItems);

  const showMore = () => setIsShown((prevState) => !prevState);
  const handleUpdate = (widthValue: number) => {
    setChipWidth((prevState) => (prevState = widthValue));
  };
  const handleSelectChip = (chip: string) => {
    chip === selectedChip || chip.toLowerCase().includes("защищенный")
      ? setSelectedChip((prevState) => (prevState = ""))
      : setSelectedChip((prevState) => (prevState = chip));
  };

  useLayoutEffect(() => {
    if (listRef.current) {
      setListWidth(listRef.current.offsetWidth);
    }
  }, [listWidth]);

  useEffect(() => {
    const handleWindowResize = () => {
      listRef.current && setListWidth(listRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Container>
      <Header> Выберите чипсик: </Header>
      <div>width: {listWidth}</div>
      <ChipWrapper ref={listRef}>
        {countedChips?.map((chip) => (
          <Chip
            onResize={handleUpdate}
            key={chip}
            text={chip}
            selected={chip === selectedChip}
            onClick={handleSelectChip}
          />
        ))}
        <Button variant="chips" onClick={showMore}>
          ...
        </Button>
      </ChipWrapper>
      {isShown && (
        <Popover>
          {remainChips?.map((chip) => (
            <Chip
              key={chip}
              text={chip}
              selected={chip === selectedChip}
              onClick={handleSelectChip}
            />
          ))}
        </Popover>
      )}
    </Container>
  );
};
