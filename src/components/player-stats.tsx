import { pick } from "lodash";
import styled from "styled-components";
import shallow from "zustand/shallow";
import useStore from "../store";

export default function PlayerStats() {
  const player = useStore(s => pick(s.player, [
  ]), shallow);

  return <Container>
    <h2>Player Stats</h2>
  </Container>;
}

const Container = styled.div`
  width: 200px;
`;