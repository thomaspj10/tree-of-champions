import styled from "styled-components";
import { pick } from "lodash";
import shallow from "zustand/shallow";

import useStore from "../store";

export function ChampionTree() {
  const champions = useStore(s => pick(s.champions, [
    'championRows', 'championMap'
  ]), shallow);
  const player = useStore(s => s.player.fighter);
  const startFight = useStore(s => s.fighting.startFight);

  return <Page>
    <h2>Champions</h2>

    <Tree>
    {champions.championRows.map((row, r) =>
      <ChampionRow key={r}>
        {row.map(c => 
          <Champion key={c} onClick={() => startFight(player, champions.championMap[c].champion)}>{c}</Champion>
        )}
      </ChampionRow>
    )}
    </Tree>
  </Page>;
}

const Page = styled.div`
  width: 800px;
`;

const nodeWidth = 100;
const Tree = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${nodeWidth/4}px;
`;

const ChampionRow = styled.div`
  display: flex;
  gap: ${nodeWidth/2}px;
  justify-content: center;
`;

const Champion = styled.button`
  width: ${nodeWidth}px;
  height: 40px;
  border-radius: 5px;
`;