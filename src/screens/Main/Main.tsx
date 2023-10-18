import { Chip } from "../../components/Chip/Chip";

import { mockChips } from "../../components/mockChips";

import { Header, Container, ChipWrapper } from "./styled";

export const Main = () => {
  return (
    <Container>
      <Header> Выберите чипсик: </Header>
      <ChipWrapper>
        {mockChips?.map((chips) => <Chip key={chips} text={chips} />)}
      </ChipWrapper>
    </Container>
  );
};
