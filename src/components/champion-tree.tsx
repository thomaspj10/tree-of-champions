import styled from "styled-components";
import { pick } from "lodash";
import shallow from "zustand/shallow";

import useStore from "../store";

export function ChampionTree() {
  const champions = useStore(s => pick(s.champions, [
    'championRows',
  ]), shallow);
  const player = useStore(s => s.player.fighter);
  const startFight = useStore(s => s.fighting.startFight);

  return <Page>
    <h2>Champions</h2>

    <Tree>
    {champions.championRows.map((row, r) =>
      <ChampionRow key={r}>
        {row.map((champ, i) => 
          (champ.completed ?
            <ChampionCompleted>{champ.champion.name}</ChampionCompleted> :
            <ChampionButton
              key={`${r}:${i}`}
              onClick={() => startFight(player, champ.champion, r, i)}
              disabled={champ.locked}
            >{champ.champion.name}</ChampionButton>
          )
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
const nodeHeight = 40;
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

const ChampionButton = styled.button`
  width: ${nodeWidth}px;
  height: ${nodeHeight}px;
  border-radius: 5px;
  border: none;
  font-weight: bold;
`;

const ChampionCompleted = styled.div`
  width: ${nodeWidth}px;
  height: ${nodeHeight}px;
  border-radius: 5px;
  background-color: rgb(0, 100, 200);
  color: white;
  text-decoration: line-through;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;