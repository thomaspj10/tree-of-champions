import { pick } from "lodash";
import styled from "styled-components";
import shallow from "zustand/shallow";
import { ProgressCircle } from "../shared/components/circle-progress-bar";
import { ProgressBar } from "../shared/components/progress-bar";
import { Fighter } from "../shared/types";
import useStore from "../store";

export default function Fight() {
  const player = useStore(s => pick(s.player, [
    'fighter',
  ]), shallow);
  const champions = useStore(s => pick(s.champions, [
    'fightingChampion',
  ]), shallow);

  const champ = champions.fightingChampion;

  if (!champ) {
    return null;
  }

  return <Section>
    <FighterStats fighter={player.fighter} />
    <VSContainer>
      <VSLabel>VS</VSLabel>
    </VSContainer>
    <FighterStats fighter={champ} align="flex-end" />
  </Section>;
}


function FighterStats(props: {fighter: Fighter, align?: string}) {
  return <FighterStatsStyled align={props.align ?? "flex-start"}>
    <h2>{props.fighter.name}</h2>

    <ProgressCircle
      progress={0.6}
      hasBorder={false}
      color="white"
      radius={20}
    />
    <div>{props.fighter.health}/{props.fighter.baseStats.health}</div>
    <ProgressBar
      progress={props.fighter.health / (props.fighter.baseStats.health ?? 1)}
      hasBorder={true}
      color={"red"}
      height={20}
    />
  </FighterStatsStyled>;
}

const Section = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

const FighterStatsStyled = styled.div<{align: string}>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
  gap: 4px;
  width: 300px;
`;

const VSContainer = styled.div`
  display: flex;
  align-items: center;
`;

const VSLabel = styled.p`
  font-size: 20px;
  color: #888;
`;