import styled from 'styled-components';

type ProgressBarProps = {
  progress: number,
  color: string,
  hasBorder: boolean,  
  height?: number,
}

export function ProgressBar(props: ProgressBarProps) {
  const height = props.height ?? 10;

  return <Container height={height} hasBorder={props.hasBorder}>
    <Bar width={props.progress * 100} backgroundColor={props.color} />
  </Container>;
}

const Container = styled.div<{height: number, hasBorder: boolean}>`
  width: 100%;
  height: ${props => props.height}px;
  border: ${props => props.hasBorder ? "2px solid white" : "none"};
`;

const Bar = styled.div<{width: number, backgroundColor: string}>`
  width: ${props => props.width}%;
  height: 100%;
  background-color: ${props => props.backgroundColor};
`;