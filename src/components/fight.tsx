import { pick } from "lodash";
import styled from "styled-components";
import shallow from "zustand/shallow";
import { ProgressCircle } from "../shared/components/circle-progress-bar";
import { ProgressBar } from "../shared/components/progress-bar";
import { Fighter } from "../shared/types";
import { autoFormatNumber } from "../shared/utils";
import useStore from "../store";

export default function Fight() {
  const fighting = useStore(s => pick(s.fighting, [
    'player', 'championFighter',
  ]), shallow);

  if (!fighting.player || !fighting.championFighter) {
    return <BeforeFight>
      <strong>Select a Champion to Fight</strong>
    </BeforeFight>;
  }

  return <ActiveFight>
    <FighterStats fighter={fighting.player} />
    <VSContainer>
      <VSLabel>VS</VSLabel>
    </VSContainer>
    <FighterStats fighter={fighting.championFighter.fighter} align="flex-end" />
  </ActiveFight>;
}


function FighterStats(props: {fighter: Fighter, align?: string}) {
  const attackTime = 1 / (props.fighter.baseStats.attackSpeed ?? 0);
  return <FighterStatsStyled align={props.align ?? "flex-start"}>
    <h2>{props.fighter.name}</h2>

    <ProgressCircle
      progress={props.fighter.attackCooldown / attackTime}
      hasBorder={false}
      color="white"
      radius={20}
    />
    <div>{autoFormatNumber(props.fighter.health)}/{autoFormatNumber(props.fighter.baseStats.health ?? 0)}</div>
    <ProgressBar
      progress={props.fighter.health / (props.fighter.baseStats.health ?? 1)}
      hasBorder={true}
      color={"red"}
      height={20}
    />
  </FighterStatsStyled>;
}

const expectedHeight = 160;
const BeforeFight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${expectedHeight}px;
`;

const ActiveFight = styled.div`
  min-height: ${expectedHeight}px;
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