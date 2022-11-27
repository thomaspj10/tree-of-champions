import { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

import statsConfig from "../../config/stats";
import Icon from "../../shared/components/icon";
import { Fighter, Stat } from "../../shared/types";
import { autoFormatNumber, enumFromKey } from "../../shared/utils";

export interface FighterStatsProps {
  fighter?: Fighter,
  flipDirection?: boolean, 
}

export default function FighterStats(props: FighterStatsProps) {
  useEffect(() => {
    ReactTooltip.rebuild();
  }, [props.fighter]);

  if (!props.fighter) {
    return <Container flipDirection={props.flipDirection}></Container>
  }

  return <Container flipDirection={props.flipDirection}>
    <h2>{props.fighter.name} Stats</h2>

    <Stats>
    {Object.entries(props.fighter.baseStats)
    .map(([s, val]) => [enumFromKey(Stat, s)!, val] as [Stat, number])
    .map(([s, val]) => 
      <StatRow
        key={s}
        data-tip={statsConfig[s].label}
        data-offset={props.flipDirection ? `{'right': ${width - 50}}` : `{'left': ${width - 50}}`}
        data-place={props.flipDirection ? "left" : "right"}
        flipDirection={props.flipDirection}
      >
        <Icon icon={statsConfig[s].icon} size="sm" pixelated />
        <span>{autoFormatNumber(val)}</span>
      </StatRow>
    )}
    </Stats>
  </Container>;
}

const width = 200;
const Container = styled.div<{flipDirection?: boolean}>`
  width: ${width}px;
  text-align: ${props => props.flipDirection ? "right" : "left"};
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StatRow = styled.div<{flipDirection?: boolean}>`
  display: flex;
  flex-direction: ${props => props.flipDirection ? "row-reverse" : "row"};
  gap: 8px;
  align-items: center;
  text-align: left;
`;