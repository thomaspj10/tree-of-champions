import { pick } from "lodash";
import { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";
import shallow from "zustand/shallow";
import statusConfig from "../config/statuses";
import { ProgressCircle } from "../shared/components/circle-progress-bar";
import Icon from "../shared/components/icon";
import { ProgressBar } from "../shared/components/progress-bar";
import { Fighter } from "../shared/types";
import { formatNumber } from "../shared/utils";
import useStore from "../store";

export default function Fight() {
  const fighting = useStore(s => pick(s.fighting, [
    'player', 'championFighter',
  ]), shallow);

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [fighting.player, fighting.championFighter]);

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
    <HealthAndStatus>
      <div>{formatNumber(props.fighter.health, 0, 0)}/{formatNumber(props.fighter.baseStats.health ?? 0, 0, 0)}</div>
      <Statuses>
      {Object.values(props.fighter.statusEffects)
        .filter(e => e)
        .map(e => 
          <Status key={e.status} data-tip={statusConfig[e.status].label}>
            <span>{formatNumber(e.strength, 0, 0)}</span>
            <Icon icon={statusConfig[e.status].icon} size="xs" />
          </Status>
      )}
      </Statuses>
    </HealthAndStatus>
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

const HealthAndStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Statuses = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Status = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;