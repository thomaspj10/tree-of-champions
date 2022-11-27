import styled from "styled-components";
import { pick } from "lodash";
import shallow from "zustand/shallow";

import useStore from "../store";
import { autoFormatNumber, enumFromKey } from "../shared/utils";
import { Stat } from "../shared/types";
import statsConfig from "../config/stats";
import Icon from "../shared/components/icon";

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
            >
              <strong>{champ.champion.name}</strong>
              <Stats>
              {Object.entries(champ.champion.earnedStats)
              .map(([s, val]) => [enumFromKey(Stat, s)!, val] as [Stat, number])
              .map(([s, val]) => 
                <StatStyled key={s} data-tip={`On Defeat Gain ${statsConfig[s].label}`} data-place="bottom">
                  <span>+</span>
                  <Icon icon={statsConfig[s].icon} size="xs" pixelated />
                  <span>{autoFormatNumber(val)}</span>
                </StatStyled>
              )}
              </Stats>
            </ChampionButton>
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
const nodeHeight = 50;
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
  padding: 3px 6px;
  background-color: #CCC;

  &:hover {
    outline: 3px solid #3d73ba;
  }

  &:disabled {
    background-color: #888;
    outline: none;
    cursor: default;

    i {
      filter: opacity(0.3);
    }
  }
`;

const ChampionCompleted = styled.div`
  width: ${nodeWidth}px;
  height: ${nodeHeight}px;
  border-radius: 5px;
  background-color: #419157;
  color: white;
  text-decoration: line-through;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 6px;
`;

const StatStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;