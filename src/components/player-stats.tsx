import { pick } from "lodash";
import styled from "styled-components";
import shallow from "zustand/shallow";
import useStore from "../store";

export default function PlayerStats() {
  const player = useStore(s => pick(s.player, [
    'stats'
  ]), shallow);

  return <Container>
    <h2>Player Stats</h2>

    <Stats>
    {Object.entries(player.stats).map(([s, val]) => 
      <>
        <span>{s}</span>
        <span>{val}</span>
      </>
    )}
    </Stats>
  </Container>;
}

const Container = styled.div`
  width: 200px;
`;

const Stats = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: 3fr 1fr;
`;