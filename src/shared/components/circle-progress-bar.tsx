import styled from 'styled-components';

type ProgressCircleProps = {
  progress: number,
  color: string,
  hasBorder: boolean,  
  radius?: number,
}

export function ProgressCircle(props: ProgressCircleProps) {
  const radius = props.radius ?? 10;
  const progress = Math.min(1, props.progress);

  return <Container radius={radius} hasBorder={props.hasBorder}>
    {progress <= 0.5 ?
      <BelowHalfWrapper radius={radius}>
        <BelowHalfClip radius={radius} progress={progress} />
      </BelowHalfWrapper> :
      <>
        <BelowHalfFill color={props.color} />
        <AboveHalfFill progress={progress} color={props.color} />
      </>
    }
  </Container>;
}

const Container = styled.div<{radius: number, hasBorder: boolean}>`
  width: ${props => props.radius * 2}px;
  height: ${props => props.radius * 2}px;
  border: ${props => props.hasBorder ? "2px solid white" : "none"};
  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;

const BelowHalfWrapper = styled.div<{radius: number}>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  clip: ${props => {
    const full = props.radius * 2;
    return `rect(0, ${full}px, ${full}px, ${props.radius}px)`;
  }};
`;

interface BelowHalfClipProps {
  radius: number,
  progress: number,
}
const BelowHalfClip = styled.div.attrs<BelowHalfClipProps>(props => ({
  style: {
    transform: "rotate(calc(" + props.progress + " * 360deg))",
    clip: `rect(0, ${props.radius}px, ${props.radius * 2}px, 0)`,
  }
}))<BelowHalfClipProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: white;
`;

const BelowHalfFill = styled.div<{color: string}>`
  position: absolute;
  top: 0;
  left: 50%;
  border-radius: 0 100% 100% 0 / 50%;
  width: 100%;
  height: 100%;
  background: ${props => props.color};
`;

interface AboveHalfFillProps {
  progress: number,
  color: string,
}
const AboveHalfFill = styled.div.attrs<AboveHalfFillProps>(props => ({
  style: {
    transform: "rotate(calc(" + props.progress + " * 360deg))",
    background: props.color,
  }
}))<AboveHalfFillProps>`
  position: absolute;
  top: 0;
  right: 50%;
  border-radius: 100% 0 0 100% / 50%;
  width: 100%;
  height: 100%;
  transform-origin: right;
`;