import styled from "styled-components";

import { Container } from "../styledContainer";

export const ChipWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

export const _Container = styled(Container)`
  @media screen and (max-width: 600px) {
    width: 100%;
    border-radius: 0;
    box-shadow: none;
  }
`;
