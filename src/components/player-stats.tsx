import { pick } from "lodash";
import { Fragment } from "react";
import styled from "styled-components";
import shallow from "zustand/shallow";
import useStore from "../store";

export default function PlayerStats() {
  const player = useStore(s => pick(s.player, [
    'fighter'
  ]), shallow);

  return <Container>
    <h2>Player Stats</h2>

    <Stats>
    {Object.entries(player.fighter.baseStats).map(([s, val]) => 
      <Fragment key={s}>
        <span>{s}</span>
        <span>{val}</span>
      </Fragment>
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