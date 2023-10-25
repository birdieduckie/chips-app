import { Container } from "../styledContainer";
import styled from "styled-components";

export const _Container = styled(Container)`
  width: 50%;
  margin: 10px 0 0 0;
  align-self: flex-end;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: scroll;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
