import { pick } from "lodash";
import styled from "styled-components";
import shallow from "zustand/shallow";

import statsConfig from "../config/stats";
import Icon from "../shared/components/icon";
import { Stat } from "../shared/types";
import { autoFormatNumber, enumFromKey } from "../shared/utils";
import useStore from "../store";

export default function PlayerStats() {
  const player = useStore(s => pick(s.player, [
    'fighter'
  ]), shallow);

  return <Container>
    <h2>Player Stats</h2>

    <Stats>
    {Object.entries(player.fighter.baseStats)
    .map(([s, val]) => [enumFromKey(Stat, s)!, val] as [Stat, number])
    .map(([s, val]) => 
      <StatRow key={s} data-tip={statsConfig[s].label} data-place="right">
        <Icon icon={statsConfig[s].icon} size="sm" pixelated />
        <span>{autoFormatNumber(val)}</span>
      </StatRow>
    )}
    </Stats>
  </Container>;
}

const Container = styled.div`
  width: 200px;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StatRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;