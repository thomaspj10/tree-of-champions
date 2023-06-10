import { useEffect, useRef } from 'react';
import ReactTooltip from 'react-tooltip';
import { pick } from 'lodash';
import shallow from 'zustand/shallow';

import './App.scss';
import Header from './components/header/header';
import { ChampionTree } from './components/champion-tree';
import useStore from './store';
import FighterStats from './components/shared/fighter-stats';
import styled from 'styled-components';
import Fight from './components/fight';

function App() {
  return (
    <div className="App">
      <Header />

      <Content />

      <ReactTooltip place="bottom" effect="solid" className="standard-tooltip" />
    </div>
  );
}

let lastTime: number = performance.now();
function Content() {
  const player = useStore(s => s.player.fighter);
  const fighting = useStore(s => pick(s.fighting, [
    'championFighter', 'update'
  ]), shallow);

  const requestRef = useRef(0);
  const previousTimeRef = useRef(0);
  
  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const elapsed = (time - previousTimeRef.current) / 1000;

      fighting.update(elapsed)
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return <ContentStyled>
    <FighterStats fighter={player} />
    <ChampionsSection>
      <Fight />
      <ChampionTree />
    </ChampionsSection>
    <FighterStats fighter={fighting.championFighter?.fighter} flipDirection />
  </ContentStyled>;
}

const ContentStyled = styled.div`
  display: flex;
  gap: 80px;
  padding: 20px 30px;
  width: 100%;
  height: 100%;
`;

const ChampionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default App;
